import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

interface IRatingProps {
  initialValue?: number
  editable?: boolean
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

export function HoverRating(props: IRatingProps): JSX.Element {
  const [value, setValue] = React.useState<number | null>(
    props.initialValue ?? 4.5
  )
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Rating
        readOnly={!props.editable}
        name='hover-feedback'
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
      />
      {/* {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )} */}
    </div>
  )
}
