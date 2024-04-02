const About: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <h1>Задача:</h1>
        <p style={{ paddingBottom: '5px' }}>
          Нужно сделать приложение на реакте, которое будет выводить список
          элементов <i>(любых, товары, фото, новости, не важно)</i> со
          стороннего API <i>(найти самому)</i>. Сделать возможность помечать
          как-нибудь элементы (типо избранного) и сделать страницу для просмотра
          выбранных мною элементов.
        </p>
        <h2>Требования:</h2>
        <ul style={{ paddingBottom: '5px' }}>
          <li>Найти API со списком элементов</li>
          <li>Добавленный в избранное элемент, должен выделяться</li>
          <li>Отдельная страница для просмотра избранных элементов</li>
          <li>
            Дизайн на ваше усмотрение, не запариваться, можно использовать
            UI-библиотеки
          </li>
          <li>Итоговый код должен быть залит в репозиторий</li>
        </ul>
        <h3>Будет плюсом:</h3>
        <ul style={{ paddingBottom: '15px' }}>
          <li>Typescript</li>
          <li>
            Только функциональные компоненты <i>(hooks)</i>
          </li>
          <li>Сделать пагинацию</li>
        </ul>
        <p>
          Буду смотреть{' '}
          <ins>на код, структуру и названия файлов, удобство интерфейса</ins>.
        </p>
      </div>
    </div>
  );
};

export { About };