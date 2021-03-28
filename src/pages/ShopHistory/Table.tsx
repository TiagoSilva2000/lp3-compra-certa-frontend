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
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import { StyledTableCell } from './styleTable'

type trackingList = {
  date: string
  status: string
}

function createData(
  product: string,
  quantity: number,
  rate: string,
  total: number,
  trackingCode: string,
  tracking: trackingList[]
) {
  return {
    product,
    quantity,
    rate,
    total,
    trackingCode,
    tracking
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
          {row.product}
        </TableCell>
        <TableCell align='right'>{row.quantity}</TableCell>
        <TableCell align='right'>{row.rate}</TableCell>
        <TableCell align='right'>{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
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
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const rows = [
  createData(
    'Celular Iphone Turbinado Moto G Turbo!!',
    2,
    'Avaliar',
    24.99,
    'QWE44844uhEBEH',
    [
      { date: '2020-01-05', status: '[CTCE] são paulo' },
      { date: '2020-01-02', status: '[SALVADOR] salvador dabdhsbhbs' }
    ]
  ),
  createData(
    'Celular Iphone Turbinado Moto G Turbo!!',
    2,
    '1.5',
    24.99,
    '!YWGBEBDJEUUE#',
    [
      { date: '2020-01-05', status: '[CTE] Comercio ssa ss' },
      { date: '2020-01-02', status: '[RJ] rj rjr jr jr' }
    ]
  ),
  createData(
    'Celular Iphone Turbinado Moto G Turbo!!',
    2,
    '2.0',
    24.99,
    'DBDHE&3bu36#beh333',
    [
      { date: '2020-01-05', status: '[SSA] anananananna' },
      { date: '2020-01-02', status: '[MG] lalalalallalalalla' }
    ]
  ),
  createData(
    'Celular Moto G Turbo!!',
    2,
    'Avaliar',
    24.99,
    '2344DDNEY3EE344DD',
    [
      { date: '2020-01-05', status: '[EL] eleieleieleeielei' },
      { date: '2020-01-02', status: '[SPSP] CTCE mogi' }
    ]
  ),
  createData(
    'Celular Iphone Turbinado Moto G Turbo!!',
    2,
    'Avaliar',
    24.99,
    'AJSD4746DDBDYEE',
    [
      { date: '2020-06-85', status: '[AAAA] ababacsvasghasbsh' },
      { date: '2020-09-02', status: '[EJE] asasahsuah' }
    ]
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
            <StyledTableCell align='right'>Nota</StyledTableCell>
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
