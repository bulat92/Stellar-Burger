import { InnerFeed } from "../components/inner-feed/inner-feed";
import { useDispatch } from "../interface-and-types/hooks";
import { FEED_CONNECTION_CLOSE } from "../services/action/ws-feed-action";
import { useEffect } from "react";

export const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
