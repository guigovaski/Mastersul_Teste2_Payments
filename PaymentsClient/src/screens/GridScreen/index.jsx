import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../services/getUser";
import { Grid } from "../../components/Grid";
import styles from "./styles.module.css";
import { Undo2 } from "lucide-react";

const grids = ["gridA", "gridB", "gridC"];

const userDecode = (username) => {
  return username.replace("-", " ");
}

export const GridScreen = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        if (username) {       
          const user = await getUser(userDecode(username));
          setUserData(user);
        }
      } catch (err) {
        alert("Error: ", err)
      }
    })();
  }, [username])

  return (
    <section className={styles.container}>
      <div className={styles.headContainer}>        
        <Link to="/">
          <Undo2 color="#ddd" size={30} />
        </Link>
        <h2 className={styles.userGridsTitle}>{userDecode(username)} - Grids</h2>
      </div>
      <div className={styles.tips}>* Dica: clique 2 vezes sobre uma linha para abrir o modal com os dados</div>
      <div className={styles.gridContainer}>
        {"name" in userData && Object.entries(userData).map(([key, value]) => (
          grids.includes(key) && (
            <Grid key={key} setUserData={setUserData} gridName={key} gridData={value} />
          )
        ))}
      </div>
    </section>
  );
}