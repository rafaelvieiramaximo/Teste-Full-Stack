import React from 'react';

function UserCard({ user, onEdit, onDelete }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    }


    return (
        <div className="user-card">
            <div className='user-info'>
                <h3>{user.name}</h3>
                <p className='user-email'>{user.email}</p>
                {user.role && <span className='user-role'>{user.role}</span>}
                <p className='user-date'>Cadastrado: {formatDate(user.createdAt)}</p>
            </div>
            <div className='user-actions'>
                <button className='btn btn-edit' onClick={() => onEdit(user)}>✏️</button>
                <button className='btn btn-delete' onClick={() => onDelete(user.id)}>🗑️</button>
            </div>
        </div>
    );
}

export default UserCard;