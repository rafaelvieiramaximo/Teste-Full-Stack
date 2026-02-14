import React from 'react';
import UserCard from './UserCard';

function UserList({users, onEdit, onDelete}) {
    if (loading) {
        return <p className='loading'>Carregando usuários...</p>;
    }

    if (users.length === 0) {
        return (
            <div className='empty-state'>
                <p>Nenhum usuário encontrado.</p>
                <p>Crie o primeiro usuário.</p>
            </div>
        );
    }

    return(
        <div className='user-list'>
            <h2>Usuários Cadastrados ({users.length})</h2>
            <div className= 'users-grid'>
                {users.map(user => (
                    <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default UserList;