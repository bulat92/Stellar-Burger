import style from './no-page.module.css';

export const NoPage = () => {
  return (
    <>
      <p className={style.noPage}>404</p>
      <p>Страница не существует</p>
    </>
  );
};
