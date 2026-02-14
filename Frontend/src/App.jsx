import { useState, useEffect } from "react";
import './App.css';
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { userService } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
    } catch (error) {
      setMessage({ text: 'Erro ao carregar usuários', type: 'error' });
    } finally {
      setLoading(false);
    }

  }

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);

  }

  const handleSubmit = async (formData) => {
    try {
      if (editingUser) {
        await userService.updateUser(editingUser.id, formData);
        showMessage('Usuário atualizado com sucesso');
        setEditingUser(null);
      } else {
        await userService.createUser(formData);
        showMessage('Usuário criado com sucesso');
      }
      loadUsers();
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Erro ao salvar usuário';
      showMessage(errorMsg, 'error');
      console.error('Error:', error);
    }
  }

  const handleEdit = (user) => {
    setEditingUser(user);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleCancelEdit = () => {
    setEditingUser(null);
  }

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await userService.deleteUser(id);
        showMessage('Usuário excluído com sucesso');
        loadUsers();
      } catch (error) {
        const errorMsg = error.response?.data?.message || 'Erro ao excluir usuário';
        showMessage(errorMsg, 'error');
        console.error('Error:', error);
      }
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Gerenciamento de Usuários</h1>
        <p>Lista de usuários cadastrados no sistema</p>
      </header>

      {message.text && (<div className={`message ${message.type}`}>
        {message.text}
      </div>)}

      <main>
        <UserForm onSubmit={handleSubmit} editingUser={editingUser} onCancel={handleCancelEdit} />
        <UserList users={users} loading={loading} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;