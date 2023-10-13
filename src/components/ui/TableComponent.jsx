import React, { useState } from 'react';

function TableComponent({ element, section, commit }) {
  const cellStyle = {
    wordBreak: 'break-word',
    border: '1px solid #000',
    padding: '10px',
    flexWrap: 'wrap', // Используйте "flexWrap" с заглавной буквой "W"
    textAlign: 'left',
    width: '430px', // Фиксированная ширина
    maxHeight: '150px', // Максимальная высота для ограничения размера
    overflowY: 'auto', // Включаем вертикальную прокрутку, если текст не умещается
    overflowWrap: 'break-word', // Включаем автоматический перенос строк
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cont = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  };

  const containerStyle = {
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    margin: '20px',
  };

  const [tableData, setTableData] = useState(element);
  const [tableDataTwo, setTableDataTwo] = useState(section);
  const [tableDataThree, setTableDataThree] = useState(commit);

  const handleCellChange = (column, index, newValue) => {
    if (column === 1) {
      const updatedTableData = [...tableData];
      updatedTableData[index] = newValue;
      setTableData(updatedTableData);
    } else if (column === 2) {
      const updatedTableData = [...tableDataTwo];
      updatedTableData[index] = newValue;
      setTableDataTwo(updatedTableData);
    } else if (column === 3) {
      const updatedTableData = [...tableDataThree];
      updatedTableData[index] = newValue;
      setTableDataThree(updatedTableData);
    }
  };

  const deleteCell = (column, index) => {
    if (column === 1) {
      const updatedTableData = [...tableData];
      updatedTableData.splice(index, 1);
      setTableData(updatedTableData);
      fetch(`/api/deleteElement/${elementId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) {
            // Обработка успешного удаления
          } else {
            // Обработка ошибки удаления
          }
        })
        .catch((error) => {
          // Обработка ошибки сети
        });
    } else if (column === 2) {
      const updatedTableData = [...tableDataTwo];
      updatedTableData.splice(index, 1);
      setTableDataTwo(updatedTableData);
    } else if (column === 3) {
      const updatedTableData = [...tableDataThree];
      updatedTableData.splice(index, 1);
      setTableDataThree(updatedTableData);
    }
  };

  const addEmptyCell = (column) => {
    if (column === 1) {
      setTableData([...tableData, '']);
    } else if (column === 2) {
      setTableDataTwo([...tableDataTwo, '']);
    } else if (column === 3) {
      setTableDataThree([...tableDataThree, '']);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={tableStyle}>
        <div>
          <div style={cont}>
            <div>
              <div>
                {tableData.map((el, index) => (
                  <div key={index}>
                    <div style={cellStyle}>
                      <div contentEditable onBlur={(e) => handleCellChange(1, index, e.currentTarget.innerText)}>
                        {el}
                      </div>
                      <button onClick={() => deleteCell(1, index)}>Удалить</button>
                    </div>
                  </div>
                ))}
                <button onClick={() => addEmptyCell(1)}>Добавить ячейку</button>
              </div>
            </div>
            <div>
              <div>
                {tableDataTwo.map((el, index) => (
                  <div key={index}>
                    <div style={cellStyle}>
                      <div contentEditable onBlur={(e) => handleCellChange(2, index, e.currentTarget.innerText)}>
                        {el}
                      </div>
                      <button onClick={() => deleteCell(2, index)}>Удалить</button>
                    </div>
                  </div>
                ))}
                <button onClick={() => addEmptyCell(2)}>Добавить ячейку</button>
              </div>
            </div>
            <div>
              <div>
                {tableDataThree.map((el, index) => (
                  <div key={index}>
                    <div style={cellStyle}>
                      <div contentEditable onBlur={(e) => handleCellChange(3, index, e.currentTarget.innerText)}>
                        {el}
                      </div>
                      <button onClick={() => deleteCell(3, index)}>Удалить</button>
                    </div>
                  </div>
                ))}
                <button onClick={() => addEmptyCell(3)}>Добавить ячейку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
