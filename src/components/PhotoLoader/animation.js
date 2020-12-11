import { css, keyframes } from 'styled-components'

const placeHolderShimmer = keyframes`
  0%{
    background-position: -490px 0
  }
  100%{
    background-position: 490px 0
  }
`
export const skeletonAnimation = ({
  time = '1s',
  fill = 'forwards',
  iteration = 'infinite',
  timingFunction = 'linear',
  colorBackground = '#f6f7f8',
  colorAnimation = '#edeef1'
} = {}) =>
  css`
    animation-duration: ${time};
    animation-fill-mode: ${fill};
    animation-iteration-count: ${iteration};
    animation-name: ${placeHolderShimmer};
    animation-timing-function: ${timingFunction};
    background-image: -webkit-gradient(
      linear,
      left center,
      right center,
      from(${colorBackground}),
      color-stop(0.2, ${colorAnimation}),
      color-stop(0.4, ${colorAnimation}),
      to(${colorBackground})
    );
    background-image: -webkit-linear-gradient(
      left,
      ${colorBackground} 0%,
      ${colorAnimation} 20%,
      ${colorBackground} 40%,
      ${colorBackground} 100%
    );
    position: relative;
  `
