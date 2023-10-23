import { useState } from "react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getUsers } from "../../services/getUsers";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const users = await getUsers()      
        setUsers(users);
        setSelectedUser(users[0].name);
      } catch (err) {
        alert("Error: ", err);
      }
    })();
  }, [])

  const handleSearchButtonClick = () => {
    if (selectedUser) {
      const selectedUserUrlFormat = selectedUser.replace(" ", "-");
      navigate(`/grids/${selectedUserUrlFormat}`);
    } else {
      alert("Selecione um usuário!");
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>Selecione um usuário</h1>
        <select onChange={(e) => setSelectedUser(e.target.value)} className={styles.selectBox}>
          {users.length > 0 && users.map((user, index) => (
            <option key={index} value={user.name}>{user.name}</option>
          ))}
        </select>
        <button 
          className={styles.searchButton}
          onClick={handleSearchButtonClick}
        >Pesquisar</button>
      </div>
    </main>
  );
}