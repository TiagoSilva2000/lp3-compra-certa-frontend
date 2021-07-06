import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { RatingWrapper } from './style'

interface IRatingProps {
  initialValue?: number
  editable?: boolean
  showValue?: boolean
  totalTimes?: number
  setRatingCb?: (v: number) => void
}

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const useStyles = makeStyles({
  root: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center'
  }
})

export const HoverRating = (props: IRatingProps): JSX.Element => {
  const [value, setValue] = React.useState<number | null>(
    props.initialValue ?? 0
  )
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()
  const editable = props.editable ?? false

  return (
    <RatingWrapper>
      <div className={classes.root}>
        <Rating
          readOnly={!editable}
          name='hover-feedback'
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue)
            if (props.setRatingCb && newValue) {
              props.setRatingCb(newValue);
            }
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover)
          }}
        />
        {props.showValue && (
          <p className='rating-value'>
            {value}{' '}
            {props.totalTimes !== undefined && (
              <span>({props.totalTimes})</span>
            )}
          </p>
        )}
      </div>
    </RatingWrapper>
  )
}
