const validateCreateUser = (req, res, next) => {
    const { name, email } = req.body;
    const errors = [];

    if (!name || name.trim() === '') {
        errors.push('O nome é obrigatório');
    }

    if (!email || email.trim() === '') {
        errors.push('O email é obrigatório');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('O email é inválido');
        }
    }

    if (errors.length > 0) {
        const error = new Error(errors.join(', '));
        error.status = 400;
        return next(error);
    }
    next();
}

const validateUpdateUser = (req, res, next) => {

    const { name, email } = req.body;
    const errors = [];

    if (!name || name.trim() === '') {
        errors.push('O nome é obrigatório');
    }

    if (!email || email.trim() === '') {
        errors.push('O email é obrigatório');
    } else {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('O email é inválido');
        }
    }

    if (errors.length > 0) {
        const error = new Error(errors.join(', '));
        error.status = 400;
        return next(error);
    }
    next();
}

module.exports = {
    validateCreateUser,
    validateUpdateUser
}