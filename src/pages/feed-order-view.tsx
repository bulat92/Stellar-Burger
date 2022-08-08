import { InnerFeedOrderView } from "../components/inner-feed-order-view/inner-feed-order-view";
import { ingredientsWS } from '../services/action/ws-feed-action';

export const FeedOrderView: React.FC<{arr: ingredientsWS[]}> = ({arr}) => {
  return <InnerFeedOrderView arr={arr}/>
};
