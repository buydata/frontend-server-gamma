import React from 'react';

interface TableProps {
  data: Record<string, any>[];
}

const DynamicTable: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  // Извлекаем заголовки из ключей первого объекта
  const headers = Object.keys(data[0]);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;