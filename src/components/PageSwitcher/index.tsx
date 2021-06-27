import { NavigateBefore, NavigateNext } from '@material-ui/icons'
import React from 'react'
import { MAXPAGESWITCHERBOXES } from '../../mocks/max-page-switcher-boxes.constant'
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

    console.log(props.activePage, this.getPageFromParams(queryParams))
    this.state = {
      activePage: this.getPageFromParams(queryParams) ?? props.activePage
    }
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
    return 1
  }

  render(): JSX.Element {
    const { activePage } = this.state
    const { pages } = this.props
    let currentBoxes = 3 // firstPage + activePage + lastPage
    const indexes: number[] = []
    const isNotTheFirstPage = activePage !== 1
    const isNotTheLastPage = activePage !== pages
    const isDistantFromLeft = activePage - 1 > 2
    const isDistantFromRight = pages - activePage > 2
    let leftIdx = activePage - 1
    let rightIdx = activePage + 1

    currentBoxes += [
      isNotTheFirstPage,
      isNotTheLastPage,
      isDistantFromLeft,
      isDistantFromRight
    ].reduce<number>((acc, curr) => acc + (curr ? 1 : 0), 0)

    if (activePage !== 1 && activePage !== pages) indexes.push(activePage)
    while (
      (leftIdx > 1 || rightIdx < pages) &&
      currentBoxes !== MAXPAGESWITCHERBOXES
    ) {
      if (leftIdx > 1) {
        indexes.unshift(leftIdx)
        currentBoxes++
        leftIdx--
      }

      if (currentBoxes === MAXPAGESWITCHERBOXES) break
      if (rightIdx < pages) {
        indexes.push(rightIdx)
        currentBoxes++
        rightIdx++
      }
    }
    return (
      <StyledPageSwitcher>
        {isNotTheFirstPage && (
          <StyledSwitcherBox
            isActive={false}
            onClick={() => this.setActivePage(activePage - 1)}
            className='arrow-box'
          >
            <NavigateBefore />
          </StyledSwitcherBox>
        )}
        <StyledSwitcherBox
          isActive={activePage === 1}
          onClick={() => this.setActivePage(1)}
        >
          {1}
        </StyledSwitcherBox>
        {isDistantFromLeft && (
          <StyledSwitcherBox isActive={true}>{'...'}</StyledSwitcherBox>
        )}

        {indexes.map((num, idx) => (
          <StyledSwitcherBox
            key={idx}
            isActive={activePage === num}
            onClick={() => this.setActivePage(num)}
          >
            {num}
          </StyledSwitcherBox>
        ))}

        {isDistantFromRight && (
          <StyledSwitcherBox isActive={true}>{'...'}</StyledSwitcherBox>
        )}
        <StyledSwitcherBox
          isActive={pages === activePage}
          onClick={() => this.setActivePage(pages)}
        >
          {pages}
        </StyledSwitcherBox>
        {isNotTheLastPage && (
          <StyledSwitcherBox
            isActive={false}
            onClick={() => this.setActivePage(activePage + 1)}
            className='arrow-box'
          >
            <NavigateNext />
          </StyledSwitcherBox>
        )}
      </StyledPageSwitcher>
    )
  }
}
