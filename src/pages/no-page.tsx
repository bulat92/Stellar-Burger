import { CSSProperties } from 'react';

export const NoPage = () => {

  const style: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80px',
    fontSize: '500px',
}
 
  return (
    <>
      <p style={style}>404</p>
      <p>Страница не существует</p>
    </>
  );
};
