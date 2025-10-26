import { Badge, Col } from 'antd';
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';


const HeaderComponent = () => {
  return (
    <div>
        <WrapperHeader>
            <Col span={5} gutter={16}>
                <WrapperTextHeader>PHANBON</WrapperTextHeader>
            </Col>
            <Col span={13}>
                <ButtonInputSearch
                    placeholder = "Tìm kiếm sản phẩm"
                    size="large"
                    variantButton="light"
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px' }}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize : '30px', marginLeft: '20px'}} />
                    <div>
                        <WrapperTextHeaderSmall>Đăng Nhập / Đăng Ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <Badge count={4} size='small'>
                        <ShoppingCartOutlined style={{fontSize : '40px', color: '#fff', marginLeft: '20px'}}  />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
