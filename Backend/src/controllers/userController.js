const pool = require('../config/database');

const getAllUsers = async (req, res, next) => {
    try {
    const result = await pool.query(
      'SELECT * FROM users ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if(result.rows.length === 0){
            return res.status(404).json({error: 'Usuário não encontrado'});
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try{
        const {name, email, role} = req.body;
        const result = await pool.query(
            'INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *',
            [name, email, role || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}