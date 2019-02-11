import styled from 'styled-components'
import { styles } from '../utils'

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: .5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: .5rem;
  font-weight: 700;
  ${styles.border({
    color: `${styles.colors.mainWhite}`
  })};
  margin-bottom: 1rem;

  ${styles.transObject({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

export { BannerButton }
