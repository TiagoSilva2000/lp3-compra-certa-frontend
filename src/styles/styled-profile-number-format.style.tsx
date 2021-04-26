import React from 'react'
import { StyledNumberFormat } from './styled-number-format.style'

/* 
  Embora não seja uma boa prática, foi feita essa abordagem para lidar facilmente
  com estilizações anteriores com o Material. Futuramente, serão criados componentes
  para lidar com essa situação.
*/

export const StyledProfileNumberFormat = (props: {
  format: string
  placeholder: string
  value: string
  label: string
  onChange?: (event: unknown) => void
}): JSX.Element => {
  const { format, placeholder, value, label } = props

  return (
    <div
      className='MuiFormControl-root MuiTextField-root sc-jnHOtz eSEBhV input'
      style={{ padding: 0, marginBottom: '4%' }}
    >
      <label
        htmlFor='profile-styled'
        data-shrink='true'
        className='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-filled MuiFormLabel-filled'
      >
        {label}
      </label>
      <div className='MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl'>
        <StyledNumberFormat
          format={format}
          mask='_'
          placeholder={placeholder}
          value={value}
          id='profile-styled'
          className='MuiInputBase-input MuiFilledInput-input'
          theme='profile'
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}
