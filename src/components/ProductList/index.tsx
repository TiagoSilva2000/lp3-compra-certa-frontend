import React, { Component, createRef } from 'react'
// import { useWindowDimensions } from '../../hooks'
import Arrow from '../Arrow/index'
import ProductBox, { IProductBoxProps } from '../ProductBox'
import { StyledProductList } from './style'
interface IProductListProps {
  arrow?: typeof Arrow
  productList: IProductBoxProps[]
  title?: string
}

interface IProductListState {
  renderStartIndex: number
  maxProductRendering: number
}

// function getWindowDimensions(): { width: number; height: number } {
//   const { innerWidth: width, innerHeight: height } = window

//   return {
//     width,
//     height
//   }
// }

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   )

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions())
//     }
//     window.addEventListener('resize', handleResize)
//   }, [])

//   return windowDimensions
// }

export default class ProductList extends Component<
  IProductListProps,
  IProductListState
> {
  private ref = createRef()
  constructor(props: IProductListProps) {
    super(props)

    this.state = {
      renderStartIndex: 0,
      maxProductRendering: 5
    }
  }

  setMaxProductRendering(newMax: number): void {
    this.setState({ maxProductRendering: newMax })
  }

  // componentDidMount(): void {
  //   const { width } = useWindowDimensions()
  //   this.setMaxProductRendering(Math.floor(width / 200))
  // }

  // componentDidUpdate(): void {
  //   const { width } = useWindowDimensions()
  //   this.setMaxProductRendering(Math.floor(width / 200))
  // }

  render(): JSX.Element {
    const { innerWidth: width } = window
    const { productList: pList, title } = this.props
    const renderedProductList: IProductBoxProps[] = []
    const { renderStartIndex, maxProductRendering } = this.state
    const renderFinalIndex = maxProductRendering + renderStartIndex
    const newMax = Math.floor(width / 200)
    for (let i = renderStartIndex; i < renderFinalIndex; i++)
      renderedProductList.push(pList[i])

    return (
      <StyledProductList>
        {title && <h2>{title}</h2>}
        <div className='arrow-product-list-wrapper'>
          <Arrow symbol={'<'} />
          <div className='product-list-wrapper'>
            {renderedProductList.map((pData, index) => (
              <ProductBox {...pData} key={index}></ProductBox>
            ))}
          </div>
          <Arrow symbol={'>'} />
        </div>
      </StyledProductList>
    )
  }
}
