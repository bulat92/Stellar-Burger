import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../interface-and-types/hooks";
import { RouteProps } from 'react-router';
import { FC } from 'react';
import { getCookie } from "../../services/cookie/cookie-functions";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  
  const { success } = useSelector((store ) => store.login);
 
  return (
    <Route
      {...rest}
      // @ts-ignore
      render={({ location }) =>
        success || getCookie("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
