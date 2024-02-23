import React, { useState } from 'react';

const ObjectEditForm = ({ object, onSave }) => {
  const [editedObject, setEditedObject] = useState(object);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedObject((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedObject);
  };

  return (
    <div>
      <h2>Редактирование объекта</h2>
      <form>
        <label>
          Название:
          <input
            type="text"
            name="name"
            value={editedObject.name}
            onChange={handleInputChange}
          />
        </label>
        {/* Добавьте другие поля формы по вашему выбору */}
        <button type="button" onClick={handleSave}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default ObjectEditForm;
