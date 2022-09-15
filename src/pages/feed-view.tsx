import { InnerFeedOrderView } from "../components/inner-feed-order-view/inner-feed-order-view";
import {
  FEED_CONNECTION_INIT,
  FEED_CONNECTION_CLOSE,
} from "../services/action/ws-feed-action"; 
import { wssBaseURL, WSFeedURL } from "../services/url"; 
import { useDispatch, useSelector } from "../interface-and-types/hooks";
import { useEffect } from "react";


export const FeedView: React.FC = () => {

  const { orders } = useSelector((store) => store.wsFeed);

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


  return <InnerFeedOrderView arr={orders}/>
};
