import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {}
    return (
        <div style={{padding: '0 120px', background: '#efefef'}}>
            <Row style={{flexWrap: 'nowrap', paddingTop: '10px'}} gutter={[18, 0]}>
                <WrapperNavbar span={4}>
                    <NavbarComponent />
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts >
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
                    <div style={{display:'flex', justifyContent:'center', marginTop : '10px'}}>
                        <Pagination defaultCurrent={2} total={100} onChange={onChange}  />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TypeProductPage