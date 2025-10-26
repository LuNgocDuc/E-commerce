import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-item: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom: 1px solid gray;
    height: 44px;   
    padding-top: 10px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    span {
        color: rgb(20, 107, 75);
    }

    &:hover {           
        background-color: rgb(20, 107, 75) !important;
        border-color: rgb(20, 107, 75) !important;

        span {
            color: #fff !important;
        }
    }
    width: 100%;
    text-align: center;
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`