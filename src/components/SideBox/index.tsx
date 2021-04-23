import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSideBox } from './style'

interface ISideBoxProps {
  elements?: string[]
  linkedElements?: { name: string; route: string }[]
  title: string
}

const SideBox = (props: ISideBoxProps): JSX.Element => {
  const { elements, linkedElements, title } = props

  return (
    <StyledSideBox>
      <h3>{title}:</h3>
      <ul>
        {linkedElements &&
          linkedElements.map(({ name, route }, idx) => (
            <li key={`linked${idx}`}>
              <Link to={route}>{name}</Link>
            </li>
          ))}

        {elements && elements.map((el, idx) => <li key={`el${idx}`}>{el}</li>)}
      </ul>
    </StyledSideBox>
  )
}

export default SideBox
