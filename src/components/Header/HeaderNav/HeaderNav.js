import React, { PureComponent } from 'react'
import styled from 'styled-components/macro'

import { Container } from '../../Container'
import { mobileHamburgerIcon } from '../../../assets/icons'
import { Button } from '../../Buttons'
import { ResponsiveContext, Box } from 'grommet'
import { HeaderNavModal } from '../HeaderNavModal/HeaderNavModal'
import { HeaderLogo } from '../HeaderLogo/HeaderLogo'
import { HeaderNavLinks } from '../HeaderNavLinks/HeaderNavLinks'

class HeaderNav extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  mainMenuDesktopButton = () => (
    <nav>
      <Box direction="row">
        <HeaderNavLinks />
        <Button
          primary
          size="medium"
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/h1sX9nD45PgUAzGB6"
          margin={{ left: 'medium' }}
          droplet="bottom-left"
          label="Cadastre-se aqui"
        />
      </Box>
    </nav>
  )

  mainMenuMobileButton = () => (
    <Button
      aria-label="Menu Button"
      onClick={() => {
        this.setState({ showModal: true })
      }}
      icon={<img src={mobileHamburgerIcon} alt="Menu Icon" />}
      size="small"
    ></Button>
  )

  render = () => {
    return (
      <>
        {this.state.showModal && <HeaderNavModal onClose={this.handleCloseModal} />}
        <Container>
          <header className={this.props.className}>
            <StyledSection>
              <HeaderLogo />
            </StyledSection>
            <ResponsiveContext.Consumer>
              {(responsive) => (responsive === 'small' ? this.mainMenuMobileButton() : this.mainMenuDesktopButton())}
            </ResponsiveContext.Consumer>
          </header>
        </Container>
      </>
    )
  }
}

const StyledSection = styled.section`
  display: flex;
  flex-flow: row;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`

const StyledHeaderMenu = styled(HeaderNav)`
  width: 100%;
  height: auto;
  margin-top: 3.6rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`

export { StyledHeaderMenu as HeaderNav }
