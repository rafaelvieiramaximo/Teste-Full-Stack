import React from 'react';
import UserCard from './UserCard';

function UserList({ users, onEdit, onDelete, loading }) {
  if (loading) {
    return <div className="loading"> Carregando usuários...</div>;
  }

  if (!users || users.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhum usuário cadastrado ainda.</p>
        <p>Crie o primeiro usuário usando o formulário acima!</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2> Usuários Cadastrados ({users.length})</h2>
      <div className="users-grid">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;