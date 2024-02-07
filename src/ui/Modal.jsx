import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, children }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: (e) => {
      e.preventDefault();
      open(opens);
    },
  });
}

function Window({ opens, children }) {
  const { openName, close } = useContext(ModalContext);

  const refEl = useRef();

  useEffect(
    function () {
      function closeModal(e) {
        if (refEl.current && !refEl.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", closeModal, true);
      return () => document.removeEventListener("click", closeModal, true);
    },
    [close]
  );

  if (openName !== opens) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} ref={refEl}>
        <button className={styles.button} onClick={close}>
          &times;
        </button>
        <div>{cloneElement(children, { onCloseModal: () => close() })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
