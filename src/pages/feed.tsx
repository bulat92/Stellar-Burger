import { InnerFeed } from "../components/inner-feed/inner-feed";
/* import {WSOrderGET} from '../services/action/ws-action';
import { useDispatch } from '../interface-and-types/hooks'; */

export const Feed = () => {

 /*  const dispatch = useDispatch();
  
  dispatch(WSOrderGET()) */
  return (
    <>
      <div className="headerOnMain">
        <h1>Лента заказов</h1>
      </div>
      <InnerFeed />
    </>
  );
};
