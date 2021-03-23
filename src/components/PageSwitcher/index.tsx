import React from 'react'
import { StyledSwitcherBox, StyledPageSwitcher } from './style'
interface IPageSwitcherProps {
  pages: number
  activePage?: number
}

interface IPageSwitcherState {
  activePage: number
}

export default class PageSwitcher extends React.Component<
  IPageSwitcherProps,
  IPageSwitcherState
> {
  constructor(props: IPageSwitcherProps) {
    super(props)
    const queryParams = window.location.search

    this.state = {
      activePage: props.activePage ?? this.getPageFromParams(queryParams)
    }
  }

  private addArrows(indexes: JSX.Element[]): void {
    const { pages } = this.props
    const { activePage } = this.state

    if (Math.abs(pages - activePage) > Math.floor(pages / 2))
      indexes.push(
        <StyledSwitcherBox
          key={pages + 1}
          isActive={false}
          onClick={() => this.setActivePage(activePage + 1)}
        >
          {'>'}
        </StyledSwitcherBox>
      )

    if (Math.abs(activePage) > Math.floor(pages / 2))
      indexes.unshift(
        <StyledSwitcherBox
          key={-1}
          isActive={false}
          onClick={() => this.setActivePage(activePage - 1)}
        >
          {'<'}
        </StyledSwitcherBox>
      )
  }

  private setActivePage(newActive: number): void {
    this.setState({ activePage: newActive })
  }

  private getPageFromParams(rawQueryParams: string): number {
    const parsedParams = rawQueryParams.substr(1).split('&')

    for (const param of parsedParams) {
      const [key, value] = param.split('=')
      if (key === 'page') return parseInt(value)
    }
    return 0
  }

  render(): JSX.Element {
    const { activePage } = this.state
    const indexes = []
    for (let i = 0; i < this.props.pages; i++) {
      const isActive = i + 1 === activePage
      indexes.push(
        <StyledSwitcherBox
          key={i}
          isActive={isActive}
          onClick={() => this.setActivePage(i + 1)}
        >
          {i + 1}
        </StyledSwitcherBox>
      )
    }
    this.addArrows(indexes)

    return <StyledPageSwitcher>{indexes}</StyledPageSwitcher>
  }
}
