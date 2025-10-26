import React from 'react'
import {WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue} from './style'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rate } from 'antd';

const NavbarComponent = () => {
    const renderContent = (type, options) => { 
        switch(type) {
            case 'text':
                return options.map((option) => (
                    <WrapperTextValue key={option}>{option}</WrapperTextValue>
                ));
            
            case 'checkbox':
                return (
                    <div className="form-check" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft:" 0" }}>
                        {options.map((option) => { 
                            return (
                                <div className="form-check" key={option.value}>
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        value={option.value} 
                                        id={option.value}
                                        style={{width: '15px', height: '15px'}}
                                    />
                                    <label 
                                        className="form-check-label" 
                                        htmlFor={option.value}
                                        style={{fontSize: '12px', paddingLeft: '10px',}}
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                )
            case 'star':
                    return <div className="form-check" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft:" 0" }}>
                        {options.map((option) => { 
                            return (
                                <div key={option} style={{display: 'flex', gap:'6px'}}>
                                    <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                                    <span>{`từ ${option} sao`}</span>
                                </div>
                            );
                        })}
                    </div>
            case 'price':
                    return <div className="form-check" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft:" 0" }}>
                        {options.map((option, index) => { 
                            return (
                                <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
                            );
                        })}
                    </div>
            default:
                return {}
        }
    }
  return (
    <div>
        <WrapperLableText>Label</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['Phân Bón', 'Hạt Giống', 'Vật tư trồng lan'])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('checkbox', [
                {value:'a', label: 'A'},
                {value:'b', label: 'B'},
                {value:'c', label: 'C'}
            ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star', [3,4,5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price', ['dưới 40.000','dưới 50.000', 'dưới 70.000'])}
        </WrapperContent>
    </div>
  )
}

export default NavbarComponent