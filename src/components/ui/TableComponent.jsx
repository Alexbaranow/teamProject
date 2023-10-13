import React, { useState } from 'react';

function TableComponent({ name }) {
  const cellStyle = {
    border: '1px solid #000',
    padding: '10px',
    textAlign: 'left',
    width: '500px', // Фиксированная ширина
    height: '50px', // Фиксированная высота
  };
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };
  const containerStyle = {
    width: '100%',
    overflow: 'auto',
    margin: '20px',
  };
  const [tableData, setTableData] = useState(name);
  const addEmptyCell = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index + 1, 0, '');
    setTableData(updatedTableData);
  };
  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <tbody>
          <td>
            {tableData.map((el, index) => (
              <tr key={index}>
                <td style={cellStyle}>
                  {el}
                  <button onClick={() => addEmptyCell(index)}>Добавить ячейку</button>
                </td>
              </tr>
            ))}
          </td>
          <td>
            {tableData.map((el, index) => (
              <tr key={index}>
                <td style={cellStyle}>
                  {el}
                  <button onClick={() => addEmptyCell(index)}>Добавить ячейку</button>
                </td>
              </tr>
            ))}
          </td>
          <td>
            {tableData.map((el, index) => (
              <tr key={index}>
                <td style={cellStyle}>
                  {el}
                  <button onClick={() => addEmptyCell(index)}>Добавить ячейку</button>
                </td>
              </tr>
            ))}
          </td>
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;
