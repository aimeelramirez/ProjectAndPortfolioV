// import { useState, useRef, useEffect } from "react";
// import styles from "./../styles/styles.module.css";
// import Modal from './Modal/Modal'
// import Navigation from "./Navigation/Navigation";
// import { Switch, Route, Link, Redirect } from "react-router-dom";

// const Dashboard = () => {
//   const [, setIsOpen] = useState(false);
//   const modalRef = useRef();
//   const [stateModal, setStateModal] = useState({
//     show: false,
//   });
//   var subtitle;

//   function closeModal() {
//     setIsOpen(false);
//     modalRef.current.style.cssText = "display:none";
//   }
//   const submitModal = () => {
//     let message = "Success!";
//     setStateModal({ show: false });

//   };
//   const hideModal = () => {
//     let message = "Disregarded for edits.";
//     setStateModal({ show: false });

//     return false;
//   };
//   return (
//     <div>
//       <Link to="/dashboard">
//         <Modal
//           show={stateModal.show}>
//           <form>
//             <div id="modal-message">
//               <h5 style={{ textDecoration: 'underline', fontWeight: '700', fontSize: '1.70rem' }}>Dashboard:</h5>

//               <Navigation />
//               <div id="buttons-modal">
//                 <span className={styles.modalClose} onClick={hideModal}>
//                   <p>
//                     <span>Close</span>
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </form>
//         </Modal>
//       </Link>
//     </div>
//   );
// };
// export default Dashboard;
