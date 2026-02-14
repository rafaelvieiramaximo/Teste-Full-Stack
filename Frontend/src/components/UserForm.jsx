import React, { useState, useEffect } from 'react';

function UserForm({ onSubmit, onCancel, editingUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role || '',
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    
    setFormData({ name: '', email: '', role: '' });
    setErrors({});
  };

  return (
    <div className="user-form-container">
      <h2>{editingUser ? '✏️ Editar Usuário' : '➕ Novo Usuário'}</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            placeholder="Digite o nome"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="Digite o email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="role">Cargo (opcional)</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Ex: Developer, Designer..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingUser ? '💾 Salvar Alterações' : '➕ Criar Usuário'}
          </button>
          {editingUser && (
            <button type="button" onClick={onCancel} className="btn btn-secondary">
              ❌ Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserForm;