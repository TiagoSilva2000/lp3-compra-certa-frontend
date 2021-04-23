import { NavigateBefore } from '@material-ui/icons'
import React, { Component, createRef } from 'react'
import { CCColors } from '../../constants/colors.constant'
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
      maxProductRendering: 0
    }

    this.setMaxProductRendering = this.setMaxProductRendering.bind(this)
  }

  setMaxProductRendering(): void {
    const { innerWidth: width } = window
    console.log('it was called with: ' + width)
    const newMax = Math.floor(width / 200)
    this.setState({ maxProductRendering: newMax })
  }

  componentDidMount(): void {
    this.setMaxProductRendering()
    document.addEventListener('resize', this.setMaxProductRendering)
  }

  componentWillUnmount(): void {
    document.removeEventListener('resize', this.setMaxProductRendering)
  }

  // componentDidUpdate(): void {}

  // componentDidMount(): void {
  //   const { width } = useWindowDimensions()
  //   this.setMaxProductRendering(Math.floor(width / 200))
  // }

  // componentDidUpdate(): void {
  //   const { width } = useWindowDimensions()
  //   this.setMaxProductRendering(Math.floor(width / 200))
  // }

  render(): JSX.Element {
    const { productList: pList, title } = this.props
    const renderedProductList: IProductBoxProps[] = []
    const { renderStartIndex, maxProductRendering } = this.state
    const renderFinalIndex = maxProductRendering + renderStartIndex
    for (let i = renderStartIndex; i < renderFinalIndex - 1; i++) {
      // pList[i].title = pList[i].title + i.toString()
      // console.log(pList[i].title + i.toString())
      renderedProductList.push(pList[i])
    }

    return (
      <StyledProductList>
        {title && <h2>{title}</h2>}
        <div className='arrow-product-list-wrapper'>
          <Arrow
            left
            animationDisabled
            width={50}
            height={50}
            hasBorder
            color={CCColors.DARKPURPLE}
          />
          <div className='product-list-wrapper'>
            {renderedProductList.map((pData, index) => (
              <ProductBox {...pData} key={index}></ProductBox>
            ))}
          </div>
          <Arrow
            right
            animationDisabled
            width={50}
            height={50}
            hasBorder
            color={CCColors.DARKPURPLE}
          />
        </div>
      </StyledProductList>
    )
  }
}
