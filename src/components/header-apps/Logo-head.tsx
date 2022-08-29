import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import { CSSProperties } from "react";


const boxLogo: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer'
}
const logo: CSSProperties = {
  position: 'absolute',
  width: '289.15px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
}  

export const LogoHead = () => {
  const history = useHistory();
  return (
    <div style={boxLogo}>
      <div
        style={logo}
        onClick={() => { 
          history.replace({ pathname: "/" });
        }}
      >
        <Logo />
      </div>
    </div>
  );
};
