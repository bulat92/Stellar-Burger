Сайт сделан для комбинирования начинок и заказа космических бургеров.(Адаптивность планирую добавить позже пока что я совершенствую управление состоянием)

Конструктор бургеров находится на главной странице. Чтобы сделать заказ нужно быть авторизованным. Если нажать на кнопку “Оформить заказ” будучи не авторизованным, то происходит переадресаций на страницу авторизаций.

Страница “Лента заказов” на этой странице находится список заказов и вся статистика.

Страница “Личный кабинет” становится доступной после авторизаций. На этой странице несколько вкладок

На вкладке “Профиль” можно сохранять измененные данные или отменять изменения (но только до обновления страницы).

На вкладке "История заказов” показывается история заказов авторизованного профиля.

И “Выход” кнопка выхода из профиля.

На сайте так же организованы функций сброса пароля и регистраций. Ссылки на страницы для этих действий находятся на странице, авторизаций.

В проектной работе я использовал: Redux Toolkit, React Routing, WebSocket, React Hooks, React DnD

http://mustafinbulat.ru

Для запуска проекта нужно ввести команды

“git clone https://github.com/bulat92/Stellar-Burger”

“git init”

Для запуска тестов состояния нужно ввести команду

“npm test” (Пока что не работают в ветке forToolkit) 
Для запуска cypress тестов нужно ввести

“npx cypress open” 
