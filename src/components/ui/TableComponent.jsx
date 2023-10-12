import React from 'react';

function TableComponent() {
  const cellStyle = {
    border: '1px solid #000',
    padding: '10px',
    textAlign: 'center',
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

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}>______</td>
            <td style={cellStyle}>______</td>
            <td style={cellStyle}>______</td>
          </tr>
          <tr>
            <td style={cellStyle}>______</td>
            <td style={cellStyle}>______</td>
            <td style={cellStyle}>______</td>
          </tr>
          <tr>
            <td style={cellStyle}>______</td>
            <td style={cellStyle}>______</td>
            <td style={cellStyle}>______</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
