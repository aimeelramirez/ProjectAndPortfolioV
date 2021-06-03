import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiGithub,
} from "react-icons/fi";
import { IoHelp } from "react-icons/io5";
import styles from "./../../styles/styles.module.css";
import { notify } from "./../Config/config";

//getting footer for reusable component
export default function Socials() {
  const note = (type, note) => {
    notify(type, note);
  }
  const arraySocials = [
    <FiFacebook />,
    <FiTwitter />,
    <FiLinkedin />,
    <FiYoutube />,
    <FiGithub />,
  ];
  return (
    <footer className={styles.socials}>
      <p>
        {arraySocials.map((item, i) => (
          <span
            key={i}
            onClick={() => {
              note("error", "404: Under Construction");
            }}
          >
            {item}
          </span>
        ))}
      </p>
      <p>
        <span
          onClick={() => {
            note("error", "404");
          }}
        >
          <IoHelp />
        </span>
      </p>
    </footer>
  );
}
