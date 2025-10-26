import React from 'react'
import { IconStar, StyleNameProduct, StyleTag, WrapperCardStyle, WrapperDiscountText, WrapperImgCardStyle, WrapperPriceText, WrapperReportText } from './style';
import imageProduct from '../../assets/images/ure.png';
const CardComponent = () => {
  return (
        <WrapperCardStyle className="card" style={{ width: "20rem" }}>
            <WrapperImgCardStyle src={imageProduct} className="card-img-top" alt="..." />
            <div className="card-body">
                <StyleTag className="home-product-item__favourite">
                    <i className="bi bi-check2"></i>
                    <span>Bán Chạy</span>
                </StyleTag>
                <StyleNameProduct className="card-title">Phân Bón Ure</StyleNameProduct>
                <WrapperReportText>
                    <span>
                        <span>4.96</span><IconStar className="bi bi-star-fill"></IconStar>
                    </span>
                    <span>| Đã bán 1000+</span>
                </WrapperReportText>
                <WrapperPriceText>
                    1.000.000 đ
                    <WrapperDiscountText>
                        -15%
                    </WrapperDiscountText>
                </WrapperPriceText>
                <p className="card-text">Phân bón Đạm Cà Mau giúp cây trồng phát triển xanh tốt, tăng năng suất và chất lượng mùa vụ.</p>
                <a href="#" className="btn btn-primary">Mua ngay</a>
            </div>
        </WrapperCardStyle>
    );
}

export default CardComponent