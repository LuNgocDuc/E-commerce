import {Col, Image} from "antd"
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColSmall = styled(Col)`
    display: flex;
    flex-basic: unset;
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell  = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`

export const WrapperPriceProduct = styled.div`
    background : rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const WrapperQualityProduct = styled.h1`
    margin-top: 10px;
`
export const WrapperLabelQuantity = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-right: 20px;
`