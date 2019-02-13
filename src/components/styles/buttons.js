import styled from 'styled-components'
import { colors, border, transObject } from './globalStyles'

const BannerButton = styled.button`
  display: block;
  color: ${colors.mainWhite};
  background: transparent;
  padding: .5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: .5rem;
  font-weight: 700;
  ${border({
    color: `${colors.mainWhite}`
  })};
  margin-bottom: 1rem;

  ${transObject({})};
  &:hover {
    background: ${colors.mainWhite};
    color: ${colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${colors.mainBlack};
  ${border({
    color: `${colors.mainBlack}`
  })};

  &:hover {
    background: ${colors.mainBlack};
    color: ${colors.mainYellow};
  }
`

export { BannerButton, SectionButton }
