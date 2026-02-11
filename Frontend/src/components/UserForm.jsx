import React, { useState, useEffect } from 'react';

function UseForm({ onSubmit, onCancel, editingUser }) {
    const [formtData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingUser) {
            setFormData({
                name: editingUser.name,
                email: editingUser.email,
                role: editingUser.role || ''
            });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    }

    const validate = () => {
        const newErrors = {};

        if (!formtData.name.trim()) {
            newErrors.name = 'O nome é obrigatório';
        }

        if (!formtData.email.trim()) {
            newErrors.email = 'O email é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formtData.email)) {
            newErrors.email = 'O email é inválido';
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit(formtData);
        setFormData({ name: '', email: '', role: '' });
        setErrors({});
    };

    return (
        <div className='user-form-container'>
            <h2>{editingUser ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
            <form onSubmit={handleSubmit} className='user-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Nome:</label>
                    <input type="text" id="name" name="name" value={formtData.name} onChange={handleChange} className={errors.name ? 'error' : ''} placeholder='Digite o nome' />
                </div>
            </form>
        </div>
    )
}