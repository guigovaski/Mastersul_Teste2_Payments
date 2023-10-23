import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const Modal = ({ modalData, gridName, setModalData, setUserData }) => {
  
  const handleDeleteButtonClick = () => {
    setUserData((prevState) => {
      const newState = { ...prevState };

      if (newState[gridName].length === 1) {
        delete newState[gridName];
        return newState;
      }
    
      newState[gridName] = newState[gridName].filter((item) => item.paymentId !== Number(modalData[0].value));    
      return newState;
    });
    setModalData([]);
  }

  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h2 className={styles.modalIdentifier}>Tipo: {modalData[1].value} - Id: {modalData[0].value}</h2>
        <div className={styles.modalContent}>
          {modalData.map((value, index) => (
            <>
              {index > 0 && (
                <label key={index}>
                  <div className={styles.inputLabelTitle}>{modalData[index].type}</div>
                  <input key={index} readOnly value={value.value} />
                </label>
              )}
            </>
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={() => setModalData([])}>Cancelar</button>
          <button onClick={handleDeleteButtonClick}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalData: PropTypes.any,
  setModalData: PropTypes.func,
  gridName: PropTypes.string,
  setUserData: PropTypes.func
}