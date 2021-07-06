import React from 'react'
import { CCColors } from '../../mocks/colors.constant'
import { StyledCustomChip } from './style'

interface ICustomChipProps {
  color: 'primary' | 'secondary'
  label: string
  icon: JSX.Element
}

const CustomChip = (props: ICustomChipProps): JSX.Element => {
  return (
    <StyledCustomChip
      color={props.color}
      label={props.label}
      icon={props.icon}
    />
  )
}

export default CustomChip
