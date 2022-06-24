import { AppHeader } from "../components/header-apps/header-app";
import style from './no-page.module.css';

export const NoPage = () => {
  return (
    <>
      <AppHeader />
      <p className={style.noPage}>404</p>
      <p>Страница не существует</p>
    </>
  );
};
