import React from "react";
import style from "./BurgerConstructor.module.css";
import Total from './Total/Total'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';

class BurgerConstructor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      arr:[
        {
          "_id":"60666c42cc7b410027a1a9b1",
          "name":"Краторная булка N-200i",
          "type":"bun",
          "proteins":80,
          "fat":24,
          "carbohydrates":53,
          "calories":420,
          "price":1255,
          "image":"https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v":0
       },
       {
        "_id":"60666c42cc7b410027a1a9be",
        "name":"Мини-салат Экзо-Плантаго",
        "type":"main",
        "proteins":1,
        "fat":2,
        "carbohydrates":3,
        "calories":6,
        "price":4400,
        "image":"https://code.s3.yandex.net/react/code/salad.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/salad-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/salad-large.png",
        "__v":0
      },
       {
        "_id":"60666c42cc7b410027a1a9ba",
        "name":"Соус с шипами Антарианского плоскоходца",
        "type":"sauce",
        "proteins":101,
        "fat":99,
        "carbohydrates":100,
        "calories":100,
        "price":88,
        "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
        "__v":0
      }, 
       {
          "_id":"60666c42cc7b410027a1a9b4",
          "name":"Мясо бессмертных моллюсков Protostomia",
          "type":"main",
          "proteins":433,
          "fat":244,
          "carbohydrates":33,
          "calories":420,
          "price":1337,
          "image":"https://code.s3.yandex.net/react/code/meat-02.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
          "__v":0
       },
       {
          "_id":"60666c42cc7b410027a1a9b9",
          "name":"Соус традиционный галактический",
          "type":"sauce",
          "proteins":42,
          "fat":24,
          "carbohydrates":42,
          "calories":99,
          "price":15,
          "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
          "__v":0
       },
       {
          "_id":"60666c42cc7b410027a1a9bsb",
          "name":"Хрустящие минеральные кольца",
          "type":"main",
          "proteins":808,
          "fat":689,
          "carbohydrates":609,
          "calories":986,
          "price":300,
          "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
          "__v":0
       },
       {
        "_id":"60666c42cc7b410027a1a9bc",
        "name":"Плоды Фалленианского дерева",
        "type":"main",
        "proteins":20,
        "fat":5,
        "carbohydrates":55,
        "calories":77,
        "price":874,
        "image":"https://code.s3.yandex.net/react/code/sp_1.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
        "__v":0
        },
       {
        "_id":"60666c42cc7b410027a1a9bb",
        "name":"Хрустящие минеральные кольца",
        "type":"main",
        "proteins":808,
        "fat":689,
        "carbohydrates":609,
        "calories":986,
        "price":300,
        "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        "__v":0
     }  
      ]
    }
  }

    render() {

      const filterBun = this.state.arr.filter((el => { if(el.type != 'bun') return el}));
      const totalNumber = this.state.arr.reduce((sum, el) => sum = Number(el.price) + sum, 0);
      
 
      return (
        <section className={`${style.BurgerConstructor}`}>
            <div className={`${style.outDotsConstructorElement} mr-4`}>
              <ConstructorElement
                type="top"
                key={this.state.arr[0]._id}
                isLocked={true}
                text={this.state.arr[0].name}
                price={this.state.arr[0].price}
                thumbnail={this.state.arr[0].image_mobile}
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
              key={`${this.state.arr[0]._id}Bottom`}
              type="bottom"
              isLocked={true}
              text={this.state.arr[0].name}
              price={this.state.arr[0].price}
              thumbnail={this.state.arr[0].image_mobile}
              />
          </div> 
          <Total totalNumber = {totalNumber}/>     
        </section>
      );
    }
}
 
export default BurgerConstructor;