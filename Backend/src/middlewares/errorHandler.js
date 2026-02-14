const errorHandler = (err, req, res, next) => {
    console.error('Erro:', err);

    if (err.status == 400) {
        return res.status(400).json({ error: err.message || 'Requisição inválida' });
    }

    if (err.status == 404) {
        return res.status(404).json({ error: err.message || 'Recurso não encontrado' });
    }

    if (err.code == '23505') {
        return res.status(409).json({
            error: 'Conflito',
            message: 'Email já cadastrado',
        });
    }
    res.status(500).json({ 
        error: 'Ocorreu um erro no servidor',
        message: err.message || 'Erro interno'
     });
}

module.exports = errorHandler;