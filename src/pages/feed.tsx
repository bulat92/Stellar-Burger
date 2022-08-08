import { InnerFeed } from "../components/inner-feed/inner-feed"; 
import { useDispatch } from '../interface-and-types/hooks'; 
import { wssBaseURL, WSFeedURL } from '../services/url';
import { useEffect } from 'react';
import { FEED_CONNECTION_INIT,
FEED_CONNECTION_CLOSE} from '../services/action/ws-feed-action';

export const Feed = () => {

  const dispatch = useDispatch()

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
      <div className="headerOnMain">
        <h1>Лента заказов</h1>
      </div>
      <InnerFeed />
    </>
  );
};
