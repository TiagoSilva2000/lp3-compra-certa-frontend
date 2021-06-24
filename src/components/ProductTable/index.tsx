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
  QuantitySelectionWrapper,
  StyledDone
} from './style'
import { ProductRowData } from '../../types/product-row-data'
import { propTypes } from 'react-bootstrap/esm/Image'
import { CCColors } from '../../mocks/colors.constant'
import { qntArray } from '../../mocks/qnt-array.constant'

export interface TableTheme {
  headerColor: string
  headerBgColor: string
  slim?: boolean
}

interface ExtTableProps {
  rating?: boolean
  toReceive?: boolean
  tracking?: boolean
  address?: boolean
  additionalData?: boolean
  employeeView?: boolean
  shopcartView?: boolean
  changeQntCb?: (code: string, qntModifier: number) => void
  toReceiveCb?: () => void
}

interface IProductTableProps extends ExtTableProps {
  rows: ProductRowData[]
  theme?: TableTheme
}

interface IProductTableState {
  rows: ProductRowData[]
}

interface IRowProps extends ExtTableProps {
  row: ProductRowData
  theme: TableTheme
  removeRowCb: (orderCode: string) => void
}

const Row = (props: IRowProps) => {
  const {
    row,
    rating,
    toReceive,
    tracking,
    address,
    additionalData,
    employeeView,
    shopcartView,
    changeQntCb
  } = props
  const [open, setOpen] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  const [qnt, setQnt] = React.useState(row.quantity)
  const theme: TableTheme = props.theme
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
            {!theme.slim && <StyledProductImg src={row.img}></StyledProductImg>}
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
                onChange={e => {
                  const oldQnt = qnt
                  const newQnt = Number(e.target.value)
                  setQnt(newQnt)
                  changeQntCb && changeQntCb(row.trackingCode, newQnt - oldQnt)
                }}
              >
                {qntArray.map(v => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
              <p
                onClick={() =>
                  changeQntCb && changeQntCb(row.trackingCode, -qnt)
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
                {ready ? <StyledDone /> : <DoneOutline />}
              </ReadyButton>
            )}
            {toReceive && (
              <ReceiveButton
                variant='contained'
                disableElevation
                onClick={() => {
                  if (props.toReceiveCb) props.toReceiveCb()
                  props.removeRowCb(row.trackingCode)
                }}
              >
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
                        <StyledTableCell styles={theme}>Data</StyledTableCell>
                        <StyledTableCell styles={theme}>Status</StyledTableCell>
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

export class ProductTable extends React.Component<
  IProductTableProps,
  IProductTableState
> {
  constructor(props: IProductTableProps) {
    super(props)
    this.state = {
      rows: props.rows
    }
    this.removeRowFromTableByCode = this.removeRowFromTableByCode.bind(this)
  }

  removeRowFromTableByCode(orderCode: string, qnt?: number): void {
    let newRows: ProductRowData[] = []
    if (qnt) {
      this.state.rows.forEach(row => {
        if (row.trackingCode === orderCode) {
          row.quantity += qnt
          if (row.quantity <= 0) return
        }
        newRows.push(row)
      })
    } else {
      newRows = this.state.rows.filter(row => row.trackingCode !== orderCode)
    }

    this.setState({ rows: newRows })
    if (this.props.changeQntCb) this.props.changeQntCb(orderCode, qnt as number)
  }

  render(): JSX.Element {
    const theme: TableTheme = this.props.theme ?? {
      headerBgColor: CCColors.PRIMARYYELLOW,
      headerColor: 'white'
    }
    const { rating, toReceive, employeeView, additionalData } = this.props
    return (
      <TableContainer component={Paper}>
        <StyledTable aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              {additionalData && <StyledTableCell styles={theme} />}
              <StyledTableCell styles={theme}>Pedido</StyledTableCell>
              <StyledTableCell align='right' styles={theme}>
                Código
              </StyledTableCell>
              <StyledTableCell align='right' styles={theme}>
                Quantidade
              </StyledTableCell>
              {rating && (
                <StyledTableCell align='right' styles={theme}>
                  Nota
                </StyledTableCell>
              )}
              <StyledTableCell align='right' styles={theme}>
                Preço
              </StyledTableCell>
              {(toReceive || employeeView) && (
                <StyledTableCell align='right' styles={theme}>
                  {employeeView ? 'Pronto' : 'Marcar recebido'}
                </StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row, idx) => (
              <Row
                key={idx}
                {...this.props}
                row={row}
                theme={theme}
                removeRowCb={this.removeRowFromTableByCode}
                changeQntCb={this.removeRowFromTableByCode}
              />
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    )
  }
}
