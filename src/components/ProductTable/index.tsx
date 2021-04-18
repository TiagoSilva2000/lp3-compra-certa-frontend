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
  Paper,
  Select,
  MenuItem
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
  ReadyButton,
  QuantitySelectionWrapper
} from './style'
import { ProductRowData } from '../../types/product-row-data'
import { propTypes } from 'react-bootstrap/esm/Image'

interface ExtTableProps {
  rating?: boolean
  toReceive?: boolean
  tracking?: boolean
  address?: boolean
  additionalData?: boolean
  employeeView?: boolean
  shopcartView?: boolean
  removeFunction?: (code: string) => void
}

interface IProductTableProps extends ExtTableProps {
  rows: ProductRowData[]
}

interface IRowProps extends ExtTableProps {
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
    employeeView,
    shopcartView,
    removeFunction
  } = props
  const [open, setOpen] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  const [qnt, setQnt] = React.useState(row.quantity)
  const qntArray: number[] = []
  for (let i = 0; i < 10; i++) qntArray.push(i + 1)

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
        <TableCell align='right'>
          {!shopcartView ? (
            row.quantity
          ) : (
            <QuantitySelectionWrapper>
              <Select
                labelId='demo-customized-select-label'
                id='demo-customized-select'
                value={qnt}
                onChange={e => setQnt(e.target.value as number)}
              >
                {qntArray.map(v => (
                  <MenuItem key={`sel${v}`} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
              <p
                onClick={() =>
                  removeFunction && removeFunction(row.trackingCode)
                }
              >
                Excluir
              </p>
            </QuantitySelectionWrapper>
          )}
        </TableCell>
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

export class ProductTable extends React.Component<IProductTableProps> {
  render(): JSX.Element {
    const { rating, toReceive, employeeView, additionalData } = this.props
    return (
      <TableContainer component={Paper}>
        <StyledTable aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              {additionalData && <StyledTableCell />}
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
            {this.props.rows.map((row, idx) => (
              <Row
                key={`row${idx}`}
                {...this.props}
                row={row}
                // removeFunction={this.removeFromCode}
              />
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    )
  }
}
