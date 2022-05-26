import style from "./BurgerConstructor.module.css";
import Total from './Total/Total'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {arr} from '../../../utils/data';

const BurgerConstructor = (props) => {
 
      const filterBun = arr.filter((el => { if(el.type != 'bun') return el}));
      const totalNumber = arr.reduce((sum, el) => sum = Number(el.price) + sum, 0);
      
 
      return (
        <section className={`${style.BurgerConstructor}`}>
            <div className={`${style.outDotsConstructorElement} mr-4`}>
              <ConstructorElement
                type="top"
                key={arr[0]._id}
                isLocked={true}
                text={`${arr[0].name} (верх)`}
                price={arr[0].price}
                thumbnail={arr[0].image_mobile}
                />
            </div>
          <div className={`${style.scrollWindow} mt-4 mb-4`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='mr-2'>
                {filterBun.map(el=>(
                  <div className={style.dotsAndConstructorElement} key={el._id}>
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
              key={`${arr[0]._id}Bottom`}
              type="bottom"
              isLocked={true}
              text={`${arr[0].name} (низ)`}
              price={arr[0].price}
              thumbnail={arr[0].image_mobile}
              />
          </div> 
          <Total totalNumber = {totalNumber} onClick={props.onClick}/>     
        </section>
      );
}
 
export default BurgerConstructor;