import React, { PureComponent } from 'react'

interface BeautyScrollContainerProps {
  className?: string
  contentClassName?: string
  style?: any
  contentStyle?: any
  /**
   * @default #0002
   * */
  indicatorColor?: string
  [key: string]: any
}
declare const initState: (
  props: BeautyScrollContainerProps,
) => {
  preProps: BeautyScrollContainerProps
  hScrollable: boolean
  vScrollable: boolean
  reachLeft: boolean
  reachRight: boolean
  reachTop: boolean
  reachBottom: boolean
}
declare type BeautyScrollContainerState = ReturnType<typeof initState>
declare class BeautyScrollContainer extends PureComponent<
  BeautyScrollContainerProps,
  BeautyScrollContainerState
> {
  static getDerivedStateFromProps(
    props: BeautyScrollContainerProps,
    state: BeautyScrollContainerState,
  ): {
    preProps: BeautyScrollContainerProps
    hScrollable: boolean
    vScrollable: boolean
    reachLeft: boolean
    reachRight: boolean
    reachTop: boolean
    reachBottom: boolean
  }
  ref: React.RefObject<HTMLDivElement>
  state: {
    preProps: BeautyScrollContainerProps
    hScrollable: boolean
    vScrollable: boolean
    reachLeft: boolean
    reachRight: boolean
    reachTop: boolean
    reachBottom: boolean
  }
  removeListener: () => any
  componentDidMount(): void
  componentWillUnmount(): void
  updateState: () => void
  render(): JSX.Element
}

export default BeautyScrollContainer
