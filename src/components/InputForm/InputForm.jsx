import React from 'react'
import { WrapperAuthFormInput } from './style'
import {useState} from 'react'

const InputForm = (props) => {
    const [valueInput, setValueInput] = useState('')
    const {placeholder = 'Nhập text', ...rests} = props
    return (
        <div>
            <div className="auth-form__group">
                <WrapperAuthFormInput type="text" className="auth-form__input" placeholder= {placeholder} valueInput = {valueInput} {...rests}></WrapperAuthFormInput>
            </div>
        </div>
  )
}

export default InputForm