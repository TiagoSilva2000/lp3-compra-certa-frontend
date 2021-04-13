import React from 'react'
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from '@material-ui/core'
import { HoverRating } from '../Rating'
import {
  FlightTakeoff,
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@material-ui/icons'
import {
  StyledTableCell,
  StyledProduct,
  StyledProductImg,
  ReceiveButton,
  StyledTable
} from './style'
import { rows } from '../../constants/product-rows.constant'
import { ProductRowData } from '../../types/product-row-data'

interface ICollapsibleTableProps {
  rating?: boolean
  toReceive?: boolean
  tracking?: boolean
  address?: boolean
  additionalData?: boolean
}

interface IRowProps extends ICollapsibleTableProps {
  row: ProductRowData
}

function Row(props: IRowProps) {
  const { row, rating, toReceive, tracking, address, additionalData } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow>
        {additionalData && (
          <TableCell>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
        )}
        <TableCell component='th' scope='row'>
          <StyledProduct>
            <p>{row.product}</p>
            <StyledProductImg src={row.img}></StyledProductImg>
          </StyledProduct>
        </TableCell>
        <TableCell align='right'>{row.quantity}</TableCell>
        {rating && (
          <TableCell align='right'>
            <HoverRating />
          </TableCell>
        )}
        <TableCell align='right'>{row.total}</TableCell>
        {toReceive && (
          <TableCell align='right'>
            <ReceiveButton variant='contained' disableElevation>
              Receber
            </ReceiveButton>
          </TableCell>
        )}
      </TableRow>
      {additionalData && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              {tracking && (
                <Box margin={1}>
                  <Typography variant='h6' gutterBottom component='div'>
                    Rastreamento - {row.trackingCode}
                  </Typography>
                  <Table size='small' aria-label='purchases'>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Data</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.tracking.map(trackingRow => (
                        <TableRow key={trackingRow.date}>
                          <TableCell component='th' scope='row'>
                            {trackingRow.date}
                          </TableCell>
                          <TableCell>{trackingRow.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
              {address && (
                <Box margin={1}>
                  <Typography variant='h6' gutterBottom component='div'>
                    <FlightTakeoff /> <strong>Enviar para:</strong>{' '}
                    <p>- {row.address}</p>
                  </Typography>
                </Box>
              )}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  )
}

export const CollapsibleTable = (
  props: ICollapsibleTableProps
): JSX.Element => {
  const { rating, toReceive } = props
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Pedido</StyledTableCell>
            <StyledTableCell align='right'>Quantidade</StyledTableCell>
            {rating && <StyledTableCell align='right'>Nota</StyledTableCell>}
            <StyledTableCell align='right'>Preço</StyledTableCell>
            {toReceive && (
              <StyledTableCell align='right'>Marcar recebido</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.product} {...props} row={row} />
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
