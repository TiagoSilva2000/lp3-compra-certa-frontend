import React from 'react'
import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { ProductTable, TableTheme } from '../../components/ProductTable'
import { ProductResponse } from '../../interfaces/responses'
import { CCColors } from '../../mocks/colors.constant'
import { mockedProductList } from '../../mocks/mocked-product-list.constant'
// import { rows } from '../../mocks/product-rows.constant'
import { IndexRoute, PaymentRoute } from '../../mocks/routes.constant'
import api from '../../services/api'
import { ProductRowData } from '../../types/product-row-data'
import { getShopcart } from '../../utils/shopcartOperations'
import {
  ContinueButton,
  StyledInputWrapper,
  StyledShopCartPage,
  StyledTotalShopcartList
} from './style'
import DefaultImage from '../../assets/samples/products/default-img.png'

interface IShopCartProps {
  customerView?: boolean
}

interface IShopCartState {
  totalPrice: number
  totalQnt: number
  rows: ProductRowData[]
}


const ShopCart = (): JSX.Element => {
  const [totalPrice, setTotalPrice] = React.useState(0) 
  const [totalQnt, setTotalQnt] = React.useState(0) 
  const [rows, setRows] = React.useState<ProductRowData[]>([]);
  const tableTheme: TableTheme = {
    headerBgColor: CCColors.MINT,
    headerColor: CCColors.DARKPURPLE
  }

  React.useEffect(() => {
    (async () => {
      const shopcart = getShopcart();
      if (shopcart) {
        const ids = shopcart.map(v => v.id).toString();
        api.get<ProductResponse[]>(`/products/shopcart?ids=${ids}`).then(result => {
          const newRows: ProductRowData[] = []
          let newQnt = 0;
          let newPrice = 0;
          result.data.forEach(v => {
            const qnt = shopcart.find(item => item.id === v.id)?.qnt ?? 0
            newQnt += qnt;
            newPrice += qnt * v.active_price.value;
            newRows.push({
              id: v.id,
              address: "",
              img: v.main_media?.path ?? DefaultImage,
              total: v.active_price.value ?? 0,
              quantity: qnt,
              tracking: [],
              trackingCode: v.id.toString(),
              product: v.name
            })
          })

          setRows(newRows);
          setTotalQnt(newQnt);
          setTotalPrice(newPrice);
          })
        }
    })()
    }, [])

  const setPriceAndQnt = (qnt: number, price: number): void => {
    setTotalPrice(totalPrice + price);
    setTotalQnt(totalQnt + qnt)
  }

  const changeQntByCode = (code: string, qntModifier: number): void => {
    const newRows: ProductRowData[] = []
    rows.forEach(row => {
      if (row.trackingCode === code) {
        setPriceAndQnt(qntModifier, qntModifier * row.total)
        if (row.quantity - qntModifier > 0) newRows.push(row)
        return
      }
      newRows.push(row)
    })

    setRows(rows);
  }

  return (
    <>
    <Header />
    <StyledShopCartPage>
      <Container>
        <h2 className='shop-cart-title'>Carrinho</h2>
        {/* <ProductList
          productList={mockedProductList}
          title={'Aproveite e Compre Junto'}
        /> */}
        <ProductTable
          rows={rows}
          shopcartView
          changeQntCb={changeQntByCode}
          theme={tableTheme}
        />
        {/* <Container fluid style={{ padding: 0 }}>
          <StyledInputWrapper>
            <InputGroup className='mb-3'>
              <FormControl
                id='shopcart-cpf-input'
                placeholder='00000-000'
                aria-label='CPF'
                aria-describedby='basic-addon2'
              />
              <InputGroup.Append>
                <Button variant='outline-secondary'>OK</Button>
              </InputGroup.Append>
            </InputGroup>
          </StyledInputWrapper>
        </Container> */}
        <StyledTotalShopcartList>
          <li>
            <h4 className='total-shopcart-left'>
              Subtotal ({totalQnt} ite{totalQnt > 1 ? 'ns' : 'm'})
            </h4>
            <p>
              R$ <b>{totalPrice}</b> ou
              <br />
              R$ <b>{totalPrice - (totalPrice * 10) / 100}</b> à vista
            </p>
          </li>
          <li className='total-shopcart-right'>
            <Link to={IndexRoute} className='buy-more-link'>
              <a href=''>Comprar mais produtos</a>
            </Link>
            <Link to={{
              pathname: PaymentRoute,
              state: {rows}
            }}>
            <ContinueButton>Continuar</ContinueButton>
            </Link>
          </li>
        </StyledTotalShopcartList>
      </Container>
    </StyledShopCartPage>
    <Footer />
  </>
  )
}
// export default class ShopCarty extends React.Component<
//   IShopCartProps,
//   IShopCartState
// > {
//   constructor(props: IShopCartProps) {
//     super(props)
//     // rows.forEach(row => {l
//     //   totalPrice += row.total
//     //   totalQnt += row.quantity
//     // })

//     this.state = {
//       totalPrice: 0,
//       totalQnt: 0,
//       rows: []
//     }

//     this.changeQntByCode = this.changeQntByCode.bind(this)
//   }

//   componentDidMount(): void {
//     const shopcart = getShopcart();
//     if (shopcart) {
//       const ids = shopcart.map(v => v.id).toString();
//       api.get<ProductResponse[]>(`/products/shopcart?ids=${ids}`).then(result => {
//         const newRows: ProductRowData[] = []
//         let newQnt = 0;
//         let newPrice = 0;
//         result.data.forEach(v => {
//           const qnt = shopcart.find(item => item.id === v.id)?.qnt ?? 0
//           newQnt += qnt;
//           newPrice += qnt * v.active_price.value;
//           newRows.push({
//             address: "",
//             img: v.main_media?.path ?? DefaultImage,
//             total: v.active_price.value ?? 0,
//             quantity: qnt,
//             tracking: [],
//             trackingCode: v.id.toString(),
//             product: v.name
//           })
//         })
//         this.setState({
//           rows: newRows,
//           totalPrice: newPrice,
//           totalQnt: newQnt
//           })
//         })
//       }
//     }

//   setPriceAndQnt(qnt: number, price: number): void {
//     this.setState({ totalPrice: this.state.totalPrice + price })
//     this.setState({ totalQnt: this.state.totalQnt + qnt })
//   }

//   changeQntByCode(code: string, qntModifier: number): void {
//     const newRows: ProductRowData[] = []
//     this.state.rows.forEach(row => {
//       if (row.trackingCode === code) {
//         this.setPriceAndQnt(qntModifier, qntModifier * row.total)
//         if (row.quantity - qntModifier > 0) newRows.push(row)
//         return
//       }
//       newRows.push(row)
//     })

//     this.setState({ rows: newRows })
//   }

//   render(): JSX.Element {
//     const { totalPrice, totalQnt, rows } = this.state
//     const tableTheme: TableTheme = {
//       headerBgColor: CCColors.MINT,
//       headerColor: CCColors.DARKPURPLE
//     }

//     return (
//       <>
//         <Header />
//         <StyledShopCartPage>
//           <Container>
//             <h2 className='shop-cart-title'>Carrinho</h2>
//             {/* <ProductList
//               productList={mockedProductList}
//               title={'Aproveite e Compre Junto'}
//             /> */}
//             <ProductTable
//               rows={rows}
//               shopcartView
//               changeQntCb={this.changeQntByCode}
//               theme={tableTheme}
//             />
//             {/* <Container fluid style={{ padding: 0 }}>
//               <StyledInputWrapper>
//                 <InputGroup className='mb-3'>
//                   <FormControl
//                     id='shopcart-cpf-input'
//                     placeholder='00000-000'
//                     aria-label='CPF'
//                     aria-describedby='basic-addon2'
//                   />
//                   <InputGroup.Append>
//                     <Button variant='outline-secondary'>OK</Button>
//                   </InputGroup.Append>
//                 </InputGroup>
//               </StyledInputWrapper>
//             </Container> */}
//             <StyledTotalShopcartList>
//               <li>
//                 <h4 className='total-shopcart-left'>
//                   Subtotal ({totalQnt} ite{totalQnt > 1 ? 'ns' : 'm'})
//                 </h4>
//                 <p>
//                   R$ <b>{totalPrice}</b> ou
//                   <br />
//                   R$ <b>{totalPrice - (totalPrice * 10) / 100}</b> à vista
//                 </p>
//               </li>
//               <li className='total-shopcart-right'>
//                 <Link to={IndexRoute} className='buy-more-link'>
//                   <a href=''>Comprar mais produtos</a>
//                 </Link>
//                 <Link to={PaymentRoute}>
//                 <ContinueButton>Continuar</ContinueButton>
//                 </Link>
//               </li>
//             </StyledTotalShopcartList>
//           </Container>
//         </StyledShopCartPage>
//         <Footer />
//       </>
//     )
//   }
// }

export default ShopCart;