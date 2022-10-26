import { InnerFeed } from "../components/inner-feed/inner-feed";
import {
  FEED_CONNECTION_INIT,
  FEED_CONNECTION_CLOSE,
} from "../services/action/ws-feed-action"; 
import { wssBaseURL, WSFeedURL } from "../services/url"; 
import { useDispatch } from "../interface-and-types/hooks";
import { useEffect } from "react";
import { PageHeader } from '../components/page-header/page-header'
 
export const Feed = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({
      type: FEED_CONNECTION_INIT,
      payload: `${wssBaseURL}${WSFeedURL}`,
    });
    return () => {
      dispatch({ type: FEED_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  return (
    <>
      <PageHeader>Лента заказов</PageHeader>
      <InnerFeed />
    </>
  );
};
