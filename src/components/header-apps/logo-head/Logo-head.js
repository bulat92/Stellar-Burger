import styles from "./Logo-head.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";

export const LogoHead = () => {
  const history = useHistory();
  return (
    <div className={styles.box_logo}>
      <div className={styles.logo} >
        <Logo onClick={()=>{history.replace({ pathname: "/" })}} />
      </div>
    </div>
  );
};
