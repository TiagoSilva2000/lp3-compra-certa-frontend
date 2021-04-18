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
  KeyboardArrowUp,
  Done,
  DoneOutline
} from '@material-ui/icons'
import {
  StyledTableCell,
  StyledProduct,
  StyledProductImg,
  ReceiveButton,
  StyledTable,
  ReadyButton
} from './style'
import { ProductRowData } from '../../types/product-row-data'
import { propTypes } from 'react-bootstrap/esm/Image'

interface IProductTableProps {
  rows: ProductRowData[]
  rating?: boolean
  toReceive?: boolean
  tracking?: boolean
  address?: boolean
  additionalData?: boolean
  employeeView?: boolean
}

interface IRowProps extends IProductTableProps {
  row: ProductRowData
}

function Row(props: IRowProps) {
  const {
    row,
    rating,
    toReceive,
    tracking,
    address,
    additionalData,
    employeeView
  } = props
  const [open, setOpen] = React.useState(false)
  const [ready, setReady] = React.useState(false)

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
        <TableCell component='th' scope='row' width='fit-content'>
          <StyledProduct>
            <p>{row.product}</p>
            <StyledProductImg src={row.img}></StyledProductImg>
          </StyledProduct>
        </TableCell>
        <TableCell align='right'>{row.trackingCode}</TableCell>
        <TableCell align='right'>{row.quantity}</TableCell>
        {rating && (
          <TableCell align='right'>
            <HoverRating />
          </TableCell>
        )}
        <TableCell align='right'>{row.total}</TableCell>
        {(toReceive || employeeView) && (
          <TableCell align='right'>
            {employeeView && (
              <ReadyButton size='small' onClick={() => setReady(!ready)}>
                {ready ? <Done /> : <DoneOutline />}
              </ReadyButton>
            )}
            {toReceive && (
              <ReceiveButton variant='contained' disableElevation>
                Receber
              </ReceiveButton>
            )}
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

export const ProductTable = (props: IProductTableProps): JSX.Element => {
  const { rating, toReceive, rows, employeeView } = props
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            {!employeeView && <StyledTableCell />}
            <StyledTableCell>Pedido</StyledTableCell>
            <StyledTableCell align='right'>Código</StyledTableCell>
            <StyledTableCell align='right'>Quantidade</StyledTableCell>
            {rating && <StyledTableCell align='right'>Nota</StyledTableCell>}
            <StyledTableCell align='right'>Preço</StyledTableCell>
            {(toReceive || employeeView) && (
              <StyledTableCell align='right'>
                {employeeView ? 'Pronto' : 'Marcar recebido'}
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <Row key={`row${idx}`} {...props} row={row} />
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
