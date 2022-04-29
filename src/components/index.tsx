import React, { PureComponent } from 'react'
import classNames from 'classnames'

export interface BeautyScrollContainerProps {
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

const initState = (props: BeautyScrollContainerProps) => ({
  preProps: props,
  hScrollable: false,
  vScrollable: false,
  reachLeft: true,
  reachRight: true,
  reachTop: true,
  reachBottom: true,
})

export type BeautyScrollContainerState = ReturnType<typeof initState>

export default class BeautyScrollContainer extends PureComponent<
  BeautyScrollContainerProps,
  BeautyScrollContainerState
> {
  static getDerivedStateFromProps(
    props: BeautyScrollContainerProps,
    state: BeautyScrollContainerState,
  ) {
    return { ...state, preProps: props }
  }

  ref = React.createRef<HTMLDivElement>()

  state = initState(this.props)

  removeListener = () => null as any

  componentDidMount() {
    this.updateState()
    const el = this.ref.current!
    el.addEventListener('scroll', this.updateState)
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(this.updateState)
      observer.observe(this.ref.current!, { attributes: true })
      this.removeListener = () => {
        observer.disconnect()
        el.removeEventListener('scroll', this.updateState)
      }
    } else {
      this.removeListener = () => {
        el.removeEventListener('scroll', this.updateState)
      }
    }
  }

  componentWillUnmount() {
    this.removeListener()
  }

  updateState = () => {
    const el = this.ref.current!
    const {
      clientWidth,
      scrollWidth,
      clientHeight,
      scrollHeight,
      scrollTop,
      scrollLeft,
    } = el
    this.setState(() => ({
      hScrollable: scrollWidth > clientWidth,
      vScrollable: scrollHeight > clientHeight,
      reachLeft: scrollLeft <= 1,
      reachRight: scrollLeft >= scrollWidth - clientWidth,
      reachTop: scrollTop <= 1,
      reachBottom: scrollTop >= scrollHeight - clientHeight,
    }))
  }

  render() {
    return (
      <div
        className={classNames(
          'beauty-scroll-container',
          {
            'beauty-scroll-horizontal-scrollable': this.state.hScrollable,
            'beauty-scroll-vertical-scrollable': this.state.vScrollable,
            'beauty-scroll-reach-left': this.state.reachLeft,
            'beauty-scroll-reach-right': this.state.reachRight,
            'beauty-scroll-reach-top': this.state.reachTop,
            'beauty-scroll-reach-bottom': this.state.reachBottom,
          },
          this.props.className,
        )}
        style={this.props.style}
      >
        <div
          className={classNames(
            'beauty-scroll-content',
            this.props.contentClassName,
          )}
          style={this.props.contentStyle}
          ref={this.ref}
        >
          {this.props.children}
        </div>
        {['left', 'right', 'top', 'bottom'].map(pos => (
          <div
            key={pos}
            className={`beauty-scroll-indicator beauty-scroll-indicator-${pos}`}
            style={{ color: this.props.indicatorColor || '#0002' }}
          />
        ))}
      </div>
    )
  }
}
