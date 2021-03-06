import styled, { css } from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;  
`

export const Image = styled.img`
  border: 1px solid #d1d1d1;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height 75px;
  width: 75px;
  margin-bottom: 5px;
  background-color: #3a3a3a;
  ${props => props.loading === 'true' && css`
      object-fit: scale-down;
  `}
`
