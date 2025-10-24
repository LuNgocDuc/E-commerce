import React from 'react'

const ButtonComponent = (props) => {
    const { text, size, variant, className, icon, ...rest } = props;
    const sizeClass = size === 'large' ? 'btn-lg' : '';
    const variantClass = variant ? `btn-${variant}` : 'btn-outline-light'; // Mặc định là outline-light
    return (
        <button
            className={`btn ${variantClass} ${sizeClass} ${className || ''}`}
            type="submit"
            {...rest}
        >
            {icon && <i className={`bi bi-${icon} me-2`}></i>} {/* Hiển thị icon nếu có */}
            {text}
        </button>
    )
}

export default ButtonComponent