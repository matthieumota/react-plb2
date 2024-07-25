import { useState } from 'react';
import Button from './Button';
import ListItemEdit from './ListItem';

let nextId = 4;

function List() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
    { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
    { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
  ]);

  const addUser = () => {
    // Ajout dans un tableau
    setUsers([
      ...users,
      { id: nextId++, name: 'Tutu', avatar: 'https://i.pravatar.cc/150?u=Tutu' }
    ]);
  }

  const deleteUser = (id) => {
    // Supprimer d'un tableau
    setUsers(users.filter(user => user.id !== id));
  }

  const editUser = (id, name) => {
    // Raccourci...
    // setUsers(users.map(u => u.id === id ? { ...u, name: u.name.toUpperCase() } : u))

    setUsers(users.map(user => {
      if (user.id === id) {
        // user.name = 'TOTO';
        // return user;

        return { ...user, name: name ? name : user.name.toUpperCase() };
      } else {
        return user;
      }
    }))
  }

  return (
    <>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <h2 onClick={() => editUser(user.id)}>{user.name} ({user.id})</h2>
            <div>
              <input type="text" value={user.name} onChange={(e) => editUser(user.id, e.target.value)} />
              <ListItemEdit item={user} onConfirm={(e) => editUser(user.id, e)} />
            </div>
            <img src={user.avatar} alt={user.name} />
            <Button onClick={() => deleteUser(user.id)}>Supprimer</Button>
          </li>
        )}
      </ul>
      <Button onClick={addUser}>Ajouter</Button>
    </>
  );
}

export default List;
