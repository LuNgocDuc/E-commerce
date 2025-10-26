import styled from "styled-components";

export const WrapperModal = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    animation: fadeIn linear 0.2s;
`;

export const WrapperModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
`;

export const WrapperModalBody = styled.div`
    --growth-from : 0.7;
    --growth-to : 1;
    margin: auto;
    position: relative;
    z-index: 1;
    animation: growth linear 0.1s;
`;

export const WrapperAuthForm = styled.div`
    width: 500px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
`;

export const WrapperFormContainer = styled.div`
    padding: 0 32px;
`;

export const WrapperFormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    margin-top: 10px;
`
export const WrapperFormHeading = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #333;
`

export const WrapperFormSwitchBtn = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #ee4d2d;
    cursor: pointer;
`

export const WrapperAuthFormInput = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 16px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 2px;
    border: 1px solid #dbdbdb;
    outline: none;
`
export const WrapperAuthFormAside = styled.div`
    margin-top: 18px;
`

export const WrapperAuthFormHelp = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const WrapperAuthFormHelpLink = styled.a`
    text-decoration: none;
    font-size: 12px;
    color: #939393;
`

export const WrapperAuthFormHelpSeparate = styled.span`
    display: block;
    height: 22px;
    border-left: 1px solid #EAEAEA;
    margin: -2px 16px 0; 
`

export const WrapperAuthFormControl = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: flex-end; 
`

export const WrapperButtonBack = styled.div`
    background-color: #ccc;
    color: #000;

    &:hover {
        color: #fff;
        background-color: rgb(134, 189, 151);
    }
`

export const WrapperButtonLogIn = styled.div`
    background-color: #ee4d2d;
    color: #fff;

    &:hover {
        color: #fff;
        background-color: #c75b46;
    }
`

export const WrapperAuthFormControlBack = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: flex-end; 
`

export const WrapperAuthFormSocials = styled.div`
    background-color: #f5f5f5;
    padding: 14px 36px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`

export const WrapperAuthFormSocialsFacebook = styled.a`
    color: #fff;
    background-color: #3A5A98;

    &:hover {
        background-color: #4f6ba1;
    }
`
export const WrapperAuthFormSocialsIcon = styled.i`
    color: #fff;
`

export const WrapperAuthFormSocialsTitle = styled.span`
    color: #fff;
`

export const WrapperAuthFormSocialsGoogle = styled.a`
    color: #fff;
    background-color: #675f69;

    &:hover {
        background-color: #948a96;
    }
`
