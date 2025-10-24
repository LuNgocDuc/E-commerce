import React from 'react'

const InputComponent = (props) => {
    const { placeholder, size, className, ...rest } = props;
    const sizeClass = size === 'large' ? 'form-control-lg' : 
                      size === 'small' ? 'form-control-sm' : '';
    return (
        <input
            className={`form-control ${sizeClass} ${className || ''}`}
            placeholder={placeholder}
            type="search"
            aria-label="Search"
            {...rest}
        />
    )
}

export default InputComponent