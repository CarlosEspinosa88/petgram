import styled, { css, keyframes } from 'styled-components'

const scaleDown = keyframes`
  from {
    transform:scale(1);
  }
  to {
    transform:scale(0.5);
  }
`

const scale = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${scaleDown} ${type}`

export const List = styled.ul`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  padding: 20px 10px;
  ${props => props.fixed && css`{
    overflow: hidden;
    background:#ffffff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 565px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform:scale(0.5);
    z-index: 1;
    ${scale}
  }`
}`

export const Item = styled.li`
 padding: 0 8px;
`
