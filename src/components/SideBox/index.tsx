import { Checkbox, Container, FormControlLabel } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { CategorySectionInfo } from '../../types/category-section-info'
import { StyledSideBox } from './style'

interface ISideBoxProps {
  elements?: string[]
  linkedElements?: { name: string; route: string }[]
  title: string
  checkboxLayout?: boolean
  categorySections?: CategorySectionInfo[]
}

const SideBox = (props: ISideBoxProps): JSX.Element => {
  const {
    elements,
    linkedElements,
    title,
    categorySections,
    checkboxLayout
  } = props

  return (
    <StyledSideBox>
      <h3>{title}:</h3>
      <ul className='all-categories-wrapper'>
        {linkedElements &&
          linkedElements.map(({ name, route }, idx) => (
            <li key={`linked${idx}`}>
              {checkboxLayout ? (
                <FormControlLabel
                  label={name}
                  control={
                    <Checkbox name='form-checkbox-user' color='primary' />
                  }
                />
              ) : (
                <Link to={route}>{name}</Link>
              )}
            </li>
          ))}

        {elements &&
          elements.map((el, idx) => (
            <li key={`el${idx}`}>
              {checkboxLayout ? (
                <FormControlLabel
                  label={el}
                  control={
                    <Checkbox name='form-checkbox-user' color='primary' />
                  }
                />
              ) : (
                { el }
              )}
            </li>
          ))}

        {categorySections && (
          <ul className='categories-sections-wrapper'>
            {categorySections.map(
              ({ title, categories, subcategories }, idx) => (
                <li key={idx}>
                  <h4>{title}</h4>
                  {categories && (
                    <ul className='categories-wrapper'>
                      {categories.map((cat, idx) => (
                        <li key={idx}>
                          {checkboxLayout ? (
                            <FormControlLabel
                              label={cat}
                              control={
                                <Checkbox
                                  name='form-checkbox-user'
                                  color='primary'
                                />
                              }
                            />
                          ) : (
                            { cat }
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  {subcategories && (
                    <ul className='categories-wrapper'>
                      {subcategories.map(({ subtitle, subcategories }, idx) => (
                        <li key={idx}>
                          <ul className='subcategories-wrapper'>
                            <h5>{subtitle}</h5>

                            {subcategories.map((subcat, idx) => (
                              <li key={idx}>
                                {checkboxLayout ? (
                                  <FormControlLabel
                                    label={subcat}
                                    control={
                                      <Checkbox
                                        name='form-checkbox-user'
                                        color='primary'
                                      />
                                    }
                                  />
                                ) : (
                                  { subcat }
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        )}
      </ul>
    </StyledSideBox>
  )
}

export default SideBox
