import React from 'react'
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ButtonInputSearch = ({ placeholder, textButton, size, variantButton }) => {
  return (
    <div>
        <form className="d-flex" role="search">
            <InputComponent 
                placeholder={placeholder} 
                size={size} // Dùng prop size="large" để áp dụng form-control-lg
                className="me-2"
            />
            <ButtonComponent 
                text={textButton} 
                size={size} // Dùng prop size="large" để áp dụng btn-lg
                variant={variantButton || 'outline-success'} // Ví dụ: màu mặc định
                icon="search" // Thêm prop icon để dùng bi bi-search
            />
        </form>
    </div>
  )
}

export default ButtonInputSearch