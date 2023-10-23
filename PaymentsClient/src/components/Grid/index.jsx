import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { useState } from "react";
import { Modal } from "../Modal";

export const Grid = ({ gridData, gridName, setUserData }) => {
  const [modalData, setModalData] = useState([]);

  const handleRowClick = (event) => {
    const keys = ["PagamentoId", "Tipo", "Valor"];
    const data = Array.from(event.target.parentElement.cells).map((item, index) => ({ value: item.innerText, type: keys[index] }));
    setModalData(data);
  }

  return (
    <div className={styles.container}>
      {modalData.length > 0 && (
        <Modal gridName={gridName} setUserData={setUserData} setModalData={setModalData} modalData={modalData} />
      )}

      <table>
        <thead>
          <tr>
            <th>PagamentoId</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {gridData.map((value, index) => (
            <tr onDoubleClick={handleRowClick} key={index}>
              <td>{"paymentId" in value && value.paymentId}</td>
              <td>{"type" in value && value.type}</td>
              <td>{"value" in value && value.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Grid.propTypes = {
  gridData: PropTypes.array,
  gridName: PropTypes.string,
  setUserData: PropTypes.func
}
