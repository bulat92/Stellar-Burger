import style from "./BurgerConstructor.module.css";
import { useContext } from "react";
import TotalAndOrderButton from './TotalAndOrderButton/TotalAndOrderButton'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../prop-types';
import { v4 as uuidv4 } from 'uuid';
import {BurgerConstructorContext} from '../BurgerConstructorContext';

const BurgerConstructor = () => {
 
  const 
    {OrderIngredients} = useContext(BurgerConstructorContext),
    filterBun = OrderIngredients.filter(el => { if(el.type !== 'bun') return el}),
    objectBun = OrderIngredients.find(el => { return el.type === 'bun'});
            
      
 
      return (
        <section className={`${style.BurgerConstructor}`}>
            <div className={`${style.outDotsConstructorElement} mr-4`}>
              <ConstructorElement
                type="top"
                key={uuidv4()}
                isLocked={true}
                text={`${objectBun.name} (верх)`}
                price={objectBun.price}
                thumbnail={objectBun.image_mobile}
                />
            </div>
          <div className={`${style.scrollWindow} mt-4 mb-4`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='mr-2'>
                {filterBun.map(el =>(
                  <div className={style.dotsAndConstructorElement} key={uuidv4()}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    isLocked={false}
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image_mobile}
                    />
                  </div>
              ))}
              
            </div>
          </div> 
          <div className={`${style.outDotsConstructorElement} mr-4`}>
            <ConstructorElement 
              key={uuidv4()}
              type="bottom"
              isLocked={true}
              text={`${objectBun.name} (низ)`}
              price={objectBun.price}
              thumbnail={objectBun.image_mobile}
              />
          </div> 
          <TotalAndOrderButton />     
        </section>
      );
}

/* BurgerConstructor.contextTypes = {
  OrderIngredients : PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} */
 
export default BurgerConstructor;