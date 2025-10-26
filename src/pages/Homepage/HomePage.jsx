import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/bvtv.png'
import slider2 from '../../assets/images/lua.png'
import slider3 from '../../assets/images/saurieng.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'

export const HomePage = () => {
  const arr = ['Phân bón Ure', 'Thuốc trừ sâu', 'Phân Kali', 'Hạt giống', 'Thủy canh', 'Thuốc bảo vệ thực vật', 'Kích thích sinh trưởng', 'Phân bón sinh học', 'Phân chuồng', 'Phân bò','Phân gà', 'Vôi', 'Thuốc kích rễ',]
  return (
    <>
      <div style={{padding: '0 120px'}}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name = {item} key={item} />
            )
          })}
      </WrapperTypeProduct>
      </div>
      <div id= "container" style={{backgroundColor: '#efefef', padding: '0 120px', height: '2000px', width: '100%'}}>
        <SliderComponent arrImages = {[slider1, slider2, slider3 ]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div style={{width: '100%', display: 'flex', justifyContent:'center', marginTop: '10px'}}>
            <WrapperButtonMore
            text = "Xem thêm" 
            type = "outline" 
            style = {{
              border: '1px solid rgb(20, 107, 75)', 
              width:'240px', 
              height: '38px', 
              borderRadius: '4px'
            }}
            textStyle= {{fontWeight: 600, color: 'rgb(20, 107, 75)'}}
          />
        </div>
      </div>
    </>
  )
}
