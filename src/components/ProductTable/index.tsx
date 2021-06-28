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
import { GetOrderProductResponse, GetOrderResponse } from '../../interfaces/responses'
import DefaultImage from '../../assets/samples/products/default-img.png'

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
  toReceiveCb?: (order_id?: number, product_id?: number) => void
}

interface IProductTableProps extends ExtTableProps {
  rows: ProductRowData[]
  rrows?: GetOrderResponse[]
  theme?: TableTheme
}

interface IProductTableState {
  rows: ProductRowData[]
  rrows?: GetOrderResponse[]
}

interface IRowProps extends ExtTableProps {
  // row: ProductRowData
  product: GetOrderProductResponse
  order: GetOrderResponse
  theme: TableTheme
  removeRowCb: (orderCode: string) => void
}

const Row = (props: IRowProps) => {
  const {
    product,
    order,
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
  const [qnt, setQnt] = React.useState(product.qnt)
  console.log(product);
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
            {/* <p>{order.id}</p> */}
            <p>{product.product.name}</p>
            {/* {!theme.slim && <StyledProductImg src={product.product.main_media?.path ?? DefaultImage}></StyledProductImg>} */}
          </StyledProduct>
        </TableCell>
        <TableCell align='right'>{product.product.id}</TableCell>
        <TableCell align='right'>
          {!shopcartView ? (
            product.qnt
          ) : (
            <QuantitySelectionWrapper>
              <Select
                labelId='demo-customized-select-label'
                id='demo-customized-select'
                value={product.qnt}
                onChange={e => {
                  const oldQnt = qnt
                  const newQnt = Number(e.target.value)
                  setQnt(newQnt)
                  changeQntCb && changeQntCb(order.tracking_code, newQnt - oldQnt)
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
                  changeQntCb && changeQntCb(order.tracking_code, -qnt)
                }
              >
                Excluir
              </p>
            </QuantitySelectionWrapper>
          )}
        </TableCell>
        {rating && (
          <TableCell align='right'>
            <HoverRating initialValue={product.rating} />
          </TableCell>
        )}
        <TableCell align='right'>{product.product.active_price.value}</TableCell>
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
                disabled={order.received}
                onClick={() => {
                  if (props.toReceiveCb) props.toReceiveCb(props.order.id, product.product.id)
                  props.removeRowCb(order.tracking_code)
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
                    Rastreamento - {order.tracking_code}
                  </Typography>
                  <Table size='small' aria-label='purchases'>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell styles={theme}>Data</StyledTableCell>
                        <StyledTableCell styles={theme}>Status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.tracking.map(trackingRow => (
                        <TableRow key={trackingRow.id}>
                          <TableCell component='th' scope='row'>
                            {trackingRow.enter_time}
                          </TableCell>
                          <TableCell>{trackingRow.order_status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
              {order.address && (
                <Box margin={1}>
                  <Typography variant='h6' gutterBottom component='div'>
                    <FlightTakeoff /> <strong>Enviar para:</strong>{' '}
                    <p>- {`${order.address.street}, ${order.address.neighbour}`}</p>
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
      rows: props.rows,
      rrows: props.rrows
    }

    console.log({data: props.rrows})
    this.removeRowFromTableByCode = this.removeRowFromTableByCode.bind(this)
  }


  UNSAFE_componentWillReceiveProps(nextProps: IProductTableProps): void {
    this.setState({ rrows: nextProps.rrows });  
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
    const {rrows} = this.state
    return (
      <TableContainer component={Paper}>
        <StyledTable aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              {additionalData && <StyledTableCell styles={theme} />}
              <StyledTableCell styles={theme}>Produto</StyledTableCell>
              {/* <StyledTableCell styles={theme}>Código do Pedido</StyledTableCell> */}
              <StyledTableCell align='right' styles={theme}>
                Código do Pedido
              </StyledTableCell>
              <StyledTableCell align='right' styles={theme}>
                Código do Produto
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
            {rrows && rrows.map((rowOrder, idx) => {
              return rowOrder.products.map((rowProduct, idx) => {
                return (
                  <Row
                    key={idx}
                    {...this.props}
                    order={rowOrder}
                    product={rowProduct}
                    theme={theme}
                    removeRowCb={this.removeRowFromTableByCode}
                    changeQntCb={this.removeRowFromTableByCode}
                  />
                )
              })
            }
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
    )
  }
}
