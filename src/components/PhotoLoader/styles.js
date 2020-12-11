import styled from 'styled-components'
import { skeletonAnimation } from './animation'

export const Loader = styled.div`
  padding: 150px;
  color: #f6f7f8;
  background: #3a3a3a;
  margin 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 6px;
  overflow: hidden;
  height: auto;
  width: 414px;
  ${skeletonAnimation}
`
