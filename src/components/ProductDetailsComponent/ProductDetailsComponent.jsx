import { Col, Row, Image } from 'antd'
import React from 'react'
import imageProduct from "../../assets/images/npk1.webp"
import imageProductSmall from "../../assets/images/npk2sm.webp"
import { WrapperAddressProduct, WrapperLabelQuantity, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColSmall, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { IconStar } from '../CardComponent/style'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
  return (
    <Row style={{padding: '16px', background:'#fff', borderRadius: '4px'}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
            <Image src = {imageProduct} alt= "image product" preview = {false} />
            <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}>
                <WrapperStyleColSmall span={4}>
                    <WrapperStyleImageSmall src = {imageProductSmall} alt= "image small" preview = {false} />
                </WrapperStyleColSmall>
                <WrapperStyleColSmall span={4}>
                    <WrapperStyleImageSmall src = {imageProductSmall} alt= "image small" preview = {false} />
                </WrapperStyleColSmall>
                <WrapperStyleColSmall span={4}>
                    <WrapperStyleImageSmall src = {imageProductSmall} alt= "image small" preview = {false} />
                </WrapperStyleColSmall>
                <WrapperStyleColSmall span={4}>
                    <WrapperStyleImageSmall src = {imageProductSmall} alt= "image small" preview = {false} />
                </WrapperStyleColSmall>
                <WrapperStyleColSmall span={4}>
                    <WrapperStyleImageSmall src = {imageProductSmall} alt= "image small" preview = {false} />
                </WrapperStyleColSmall>
                <WrapperStyleColSmall span={4}>
                    <WrapperStyleImageSmall src = {imageProductSmall} alt= "image small" preview = {false} />
                </WrapperStyleColSmall>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft: '10px'}}>
            <WrapperStyleNameProduct>Phân Bón NPK 20-20-15 đa năng 3 màu  (1Kg)</WrapperStyleNameProduct>
            <div>
                <IconStar className="bi bi-star-fill"></IconStar>
                <IconStar className="bi bi-star-fill"></IconStar>
                <IconStar className="bi bi-star-fill"></IconStar>
                <IconStar className="bi bi-star-fill"></IconStar>
                <IconStar className="bi bi-star-fill"></IconStar>
                <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>
                    200.000 đ
                </WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>Q.1, P. Bến Nghé, Hồ Chí Minh</span> -
                <span className='change-address'> Đổi địa chỉ </span>
            </WrapperAddressProduct>
            <div>
                <WrapperQualityProduct>
                    <WrapperLabelQuantity>Số lượng</WrapperLabelQuantity>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px'}}>
                        <button type="button" className="btn btn-outline-success btn-lg"><i className="bi bi-dash-lg"></i></button>
                        <button type="button" className="btn btn-outline-secondary btn-lg">30</button>
                        <button type="button" className="btn btn-outline-success btn-lg"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </WrapperQualityProduct>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap:'12px', marginTop:'15px'}}>
                <ButtonComponent
                    text={"Chọn mua"}
                    size={"large"} 
                    style={{
                        backgroundColor: 'rgb(255, 57, 69)', // Màu đỏ nổi bật
                        color: '#fff',             // Chữ trắng
                        border: 'none',            // Bỏ viền
                        height: '48px',            // Tăng chiều cao
                        width: '220px',
                        borderRadius: '4px',        // Bo góc nhẹ
                        fontSize: '15px',
                        fontWeight: '700'
                    }}
                />
                <ButtonComponent
                    text={"Mua trước trả sau"}
                    size={"large"} 
                    style={{
                        backgroundColor: '#fff', // Màu đỏ nổi bật
                        color: 'rgb(13, 92, 182)',             // Chữ trắng
                        border: '1px solid rgb(13, 92, 182)',            // Bỏ viền
                        height: '48px',            // Tăng chiều cao
                        width: '220px',
                        borderRadius: '4px',        // Bo góc nhẹ
                        fontSize: '15px',
                        fontWeight: '700'
                    }}
                />
            </div>
        </Col>
      </Row>
  )
}

export default ProductDetailsComponent