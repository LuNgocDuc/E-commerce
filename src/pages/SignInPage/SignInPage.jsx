import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {  WrapperAuthForm, 
          WrapperAuthFormAside, 
          WrapperAuthFormControl, 
          WrapperAuthFormHelp, 
          WrapperAuthFormHelpLink, 
          WrapperAuthFormHelpSeparate, 
          WrapperAuthFormInput, 
          WrapperAuthFormSocials, 
          WrapperAuthFormSocialsFacebook, 
          WrapperAuthFormSocialsGoogle, 
          WrapperAuthFormSocialsIcon, 
          WrapperAuthFormSocialsTitle, 
          WrapperButtonBack, 
          WrapperButtonLogIn, 
          WrapperFormContainer, 
          WrapperFormHeader, 
          WrapperFormHeading, 
          WrapperFormSwitchBtn, 
          WrapperModal,
          WrapperModalBody,
          WrapperModalOverlay} 
from './style';
import InputForm from '../../components/InputForm/InputForm';

const SignInPage = () => {
  return (
    <div>
      <WrapperModal className="modal">
        <WrapperModalOverlay className="modal__overlay"></WrapperModalOverlay>
        <WrapperModalBody className="modal__body">
          <WrapperAuthForm className="auth-form">
            <WrapperFormContainer className="auth-form__container">
              <WrapperFormHeader className="auth-form__header">
                  <WrapperFormHeading className="auth-form__heading">Đăng nhập</WrapperFormHeading>
                  <WrapperFormSwitchBtn className="auth-form__switch-btn">Đăng ký</WrapperFormSwitchBtn>
              </WrapperFormHeader>
              
              <div className="auth-form__form">
                <InputForm placeholder = "Email của bạn " />
                <InputForm type = "password" placeholder = "Mật khẩu của bạn "/>
              </div>

              <WrapperAuthFormAside className="auth-form__aside">
                <WrapperAuthFormHelp className="auth-form__help">
                  <WrapperAuthFormHelpLink href="" className="auth-form__help-link auth-form__help-forgot" style={{color: '#ee4d2d'}}>Quên mật khẩu</WrapperAuthFormHelpLink>
                  <WrapperAuthFormHelpSeparate className="auth-form__help-separate"></WrapperAuthFormHelpSeparate>
                  <WrapperAuthFormHelpLink href="" className="auth-form__help-link">Cần trợ giúp</WrapperAuthFormHelpLink>
                </WrapperAuthFormHelp>
              </WrapperAuthFormAside>

              <WrapperAuthFormControl className="auth-form__controls">
                <WrapperButtonBack className="btn btn-normal auth-form__controls-back">TRỞ LẠI</WrapperButtonBack>
                <WrapperButtonLogIn className="btn" style={{marginLeft: '8px'}}>ĐĂNG NHẬP</WrapperButtonLogIn>
              </WrapperAuthFormControl>
            </WrapperFormContainer>

            <WrapperAuthFormSocials className="auth-form__socials">
              <WrapperAuthFormSocialsFacebook href="" className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                <WrapperAuthFormSocialsIcon className="bi bi-facebook auth-form__socials-icon"></WrapperAuthFormSocialsIcon>
                <WrapperAuthFormSocialsTitle className="auth-form__socials-title" style={{marginLeft: '4px'}}>
                    Kết nối với Facebook
                </WrapperAuthFormSocialsTitle>
              </WrapperAuthFormSocialsFacebook>
              <WrapperAuthFormSocialsGoogle href="" className="auth-form__socials--google btn btn--size-s btn--with-icon">
                <WrapperAuthFormSocialsIcon className="bi bi-google auth-form__socials-icon"></WrapperAuthFormSocialsIcon>
                <WrapperAuthFormSocialsTitle className="auth-form__socials-title" style={{marginLeft: '4px'}}>
                    Kết nối với Google
                </WrapperAuthFormSocialsTitle>
              </WrapperAuthFormSocialsGoogle>
            </WrapperAuthFormSocials>
          </WrapperAuthForm>
        </WrapperModalBody>
      </WrapperModal>
    </div>
  )
}

export default SignInPage