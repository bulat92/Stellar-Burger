import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteProps } from 'react-router';
import { FC } from 'react';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  
  const { success } = useSelector((store: any) => store.login);
 
  return (
    <Route
      {...rest}
      // @ts-ignore
      render={({ location }) =>
        success ? (
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
