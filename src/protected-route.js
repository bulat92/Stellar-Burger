import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, ...rest }) => {
  
  const { success } = useSelector((store) => store.login);
 
  return (
    <Route
      {...rest}
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
