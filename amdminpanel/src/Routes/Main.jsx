import React from 'react';
import { Link } from 'react-router-dom';
import ObjectList from '../Components/ObjectsList';
import ObjectEditForm from '../Components/ObjectEditForm';
import '../styles/style.css';

const objectsData = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
  // остальные объекты 
];

const objectData = {
  id: 1,
  name: 'Object 1',
};

const MainPage = () => {
  return (
    <div className="container">
      <h1>Добро пожаловать на главную страницу</h1>
      <p>
        Это ваша главная страница, где вы можете найти различные разделы и ссылки на
        другие части вашего приложения.
      </p>
      <Link to="/objects" className="link">
        Перейти к списку объектов
      </Link>
      <br />
      <Link to="/objects/edit/1" className="link">
        Редактировать объект 1
      </Link>

      {/* Pass objects data to ObjectList */}
      <div className="object-list">
        <ObjectList objects={objectsData} />
      </div>

      {/* Pass object data to ObjectEditForm */}
      <div className="object-edit-form">
        <ObjectEditForm object={objectData} />
      </div>
    </div>
  );
};

export default MainPage;
