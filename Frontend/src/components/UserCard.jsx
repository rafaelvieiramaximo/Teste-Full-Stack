import React from 'react';

function UserCard({ user, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'Data não disponível';
    
    try {
      const date = new Date(dateString);
      
      if (isNaN(date.getTime())) {
        return 'Data inválida';
      }
      
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return 'Data inválida';
    }
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p className="user-email">{user.email}</p>
        {user.role && <span className="user-role">{user.role}</span>}
        <p className="user-date">Cadastrado em: {formatDate(user.created_at)}</p>
      </div>
      <div className="user-actions">
        <button className="btn btn-edit" onClick={() => onEdit(user)}>
          ✏️ Editar
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(user.id)}>
          🗑️ Deletar
        </button>
      </div>
    </div>
  );
}

export default UserCard;