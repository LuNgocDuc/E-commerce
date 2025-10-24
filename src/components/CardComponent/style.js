import styled from "styled-components";

export const WrapperCardStyle = styled.div`
    border: 1px solid #ccc; 
    border-radius: 4px;
    overflow: hidden;
    position: relative;
`
export const StyleTag = styled.div`
    position: absolute;
    top: 10px;
    left: -4px;
    color: #ee4d2d;
    background-color: currentColor;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.1rem;
    padding-right: 4px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2.9px;
        border-top: 3px solid currentColor;
        border-left: 3px solid transparent;
        filter: brightness(60%);
    }
    
    & span {
        color: #fff;
    }

    & i {
        color: #fff;
        font-size: 0.6rem;
        margin: 0 2px 0 5px;
    }
`

export const WrapperImgCardStyle = styled.img`
    width: 100%;
    height: 160px;
`

export const StyleNameProduct = styled.div `
    font-weight: 600;
    font-size: 12px;
    line height: 16px;
    color: rgb(56, 56, 61);
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: #000;
    display: flex;
    align-item: center
`

export const IconStar = styled.i`
    color: yellow; 
    margin: 0 4px 7px;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0;
`

export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 11px;
    font-weight: 500;
    margin-left: 5px;
`
