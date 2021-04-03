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
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  FlightTakeoff
} from '@material-ui/icons'
import { StyledTableCell, StyledProduct, StyledProductImg } from './styleTable'
import { Img1, Img2, Img3 } from './ProductImg'

function createData(
  product: string,
  img: string,
  quantity: number,
  total: number,
  adress: string
) {
  return {
    product,
    img,
    quantity,
    total,
    adress
  }
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          <StyledProduct>
            <p>{row.product}</p>
            <StyledProductImg src={row.img}></StyledProductImg>
          </StyledProduct>
        </TableCell>
        <TableCell align='right'>{row.quantity}</TableCell>
        <TableCell align='right'>{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                <FlightTakeoff /> <strong>Enviar para:</strong>{' '}
                <p>- {row.adress}</p>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const rows = [
  createData(
    'Celular Iphone Turbinado Moto G Turbo Mega hiper power blaster bom OPORTUNIDADE!!',
    Img1,
    1,
    24.99,
    'Rua Doze de Março, 588, Nossa Senhora da Apresentação, 59115-568'
  ),
  createData(
    'Celular Iphone Turbinado Moto G Turbo!!',
    Img2,
    3,
    24099.99,
    'Rua Marcos Moro, 469, Curitiba, 65605-200'
  ),
  createData(
    'Celular Iphone Turbinado Moto G Turbo!!',
    Img3,
    7,
    2000.99,
    'Independência - 1º Complemento Setor das Mansões, Aparecida de Goiânia, GO, 29109-005'
  )
]

export const CollapsibleTable = (): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Pedido</StyledTableCell>
            <StyledTableCell align='right'>Quantidade</StyledTableCell>
            <StyledTableCell align='right'>Preço</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
