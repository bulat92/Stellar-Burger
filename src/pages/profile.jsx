import { AppHeader } from "../components/header-apps/header-app";
import {ProfileInner} from '../components/inner-profile/inner-profile'
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


export const Profile = () => {

  const {success} = useSelector(store => store.login) 

  if (!success) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    );
  }

  return (
    <>
      <AppHeader />
      <ProfileInner />
    </>
  );
};
