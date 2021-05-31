import { useState, useRef, useEffect } from "react";
import styles from "./../styles/styles.module.css";

import Navigation from "./Navigation/Navigation";
const Dashboard = () => {
  var subtitle;

  const [, setIsOpen] = useState(false);
  const modalRef = useRef();
  useEffect(() => {
    subtitle.style.color = "green";
  }, [subtitle]);

  function closeModal() {
    setIsOpen(false);
    modalRef.current.style.cssText = "display:none";
  }
  return (
    <div className="modal modal-main" ref={modalRef}>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Dashboard</h2>

      <span className={styles.modalClose} onClick={closeModal}>
        <p>
          <span>Close</span>
        </p>
      </span>
      <Navigation />
    </div>
  );
};
export default Dashboard;
