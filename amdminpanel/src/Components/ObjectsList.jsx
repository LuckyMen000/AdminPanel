import React from 'react';

const ObjectList = ({ objects }) => {
  return (
    <div>
      <h2>Список объектов</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            {/* Добавьте другие заголовки столбцов по вашему выбору */}
          </tr>
        </thead>
        <tbody>
          {objects.map((object) => (
            <tr key={object.id}>
              <td>{object.id}</td>
              <td>{object.name}</td>
              {/* Добавьте другие ячейки данных по вашему выбору */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectList;
