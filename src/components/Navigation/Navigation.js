import { FiHome, FiHeart, FiTruck, FiEdit, FiSettings } from "react-icons/fi";
import styles from "./../../styles/styles.module.css";

//getting footer for reusable component
export default function Navigation() {
  const arraySocials = {
    item: {
      icons: [<FiHome />, <FiHeart />, <FiTruck />, <FiEdit />, <FiSettings />],
    },
  };
  let names = ["Home", "Favorites", "Orders", "Edit", "Settings"];
  return (
    <footer className={styles.settings}>
      <p>
        {arraySocials.item.icons.map((item, i) => (
          <span
            key={i}
            onClick={() => {
              alert("404: Under Construction");
            }}
          >
            <p>
              {" "}
              <span>{item} </span>
              {names[i]}
            </p>
          </span>
        ))}
      </p>
    </footer>
  );
}
