import React, { Component } from 'react'
import Indexer from '../Indexer'
import { StyledBanner, StyledBannerUnity, StyledIndexerWrapper } from './style'

interface IBannerUnityProps {
  imgSrc: string
  alt: string
}

interface IBannerState {
  index: number
}

interface IBannerProps {
  bannerUnities: IBannerUnityProps[]
}

const BannerUnity = (props: IBannerUnityProps) => {
  const { imgSrc, alt } = props

  return (
    <StyledBannerUnity>
      <img src={imgSrc} alt={alt} />
    </StyledBannerUnity>
  )
}

export default class Banner extends Component<IBannerProps, IBannerState> {
  constructor(props: IBannerProps) {
    super(props)
    this.state = {
      index: 0
    }
  }

  componentDidMount(): void {
    setInterval(() => this.changeBannerUnity(1), 3000)
  }

  changeBannerUnity(modifier: 1 | -1): void {
    const { index } = this.state
    const max = this.props.bannerUnities.length
    const nIdx = (index + modifier + max) % max
    this.setState({ index: nIdx })
  }

  render(): JSX.Element {
    const banners = this.props.bannerUnities
    const indexes = banners.length
    const { index: i } = this.state

    return (
      <StyledBanner>
        <div id='bannerWrapper'>
          <BannerUnity alt={banners[i].alt} imgSrc={banners[i].imgSrc} />
          <span onClick={() => this.changeBannerUnity(-1)} className='left'>
            &#10094;
          </span>
          <span onClick={() => this.changeBannerUnity(1)} className='right'>
            &#10095;
          </span>
        </div>
        <StyledIndexerWrapper>
          <Indexer indexes={indexes} activeIndex={i} />
        </StyledIndexerWrapper>
      </StyledBanner>
    )
  }
}
