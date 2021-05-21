import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube, FiGithub } from "react-icons/fi"
import { IoHelp } from "react-icons/io5";
import styles from "./../styles/styles.module.css"
//getting footer for reusable component
export default function Socials() {
    const arraySocials = [
        <FiFacebook />,
        <FiTwitter />,
        <FiLinkedin />,
        <FiYoutube />,
        <FiGithub />,
        <IoHelp />
    ]
    return (
        <footer className={styles.socials}>
            {arraySocials.map((item, i) => (
                <span key={i} onClick={() => { alert("Under Construction") }}>{item}</span>))}
        </footer>
    )
}