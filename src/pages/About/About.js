import React, { useContext } from 'react'

import { AboutBanner } from './AboutBanner/AboutBanner'

import styled from 'styled-components/macro'
import { respondTo } from '../../utils/breakpoints/_respondTo'

import { Box, ResponsiveContext, Avatar, Image } from 'grommet'
import { Paragraph } from '../../components/Typography/Paragraph'
import { Heading } from '../../components/Typography/Heading'

import { participantes } from './participantes'
import { idealizadoras } from './idealizadoras'
import { missionIcon } from '../../assets/icons'

const AboutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #0f1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`

const SectionStyled = styled.section`
  p {
    padding-bottom: 2em;
  }
`
const Video = styled.video`
  width: 100%;
  height: 300px;
  border-radius: 14px;
  ${respondTo.desktop`
    width: 476px;
    height: 338px;
  `}
`

const Square = styled(Box)`
  box-shadow: 0px 10px 32px #00000029;
  border-radius: 0px 20px 20px 20px;
  width: 45px;
  padding: 14px;
  ${respondTo.desktop`
  width: 50px;
`}
`

/* stylelint-disable property-no-unknown */
const DropletAvatar = styled(Avatar)`
  border-${(props) => props.dropletDirection}-radius: 0; 
`
/* stylelint-enable property-no-unkown */

const About = () => {
  const screenSize = useContext(ResponsiveContext)
  const contentDirection = screenSize === 'small' ? 'column' : 'row'
  const textAlign = screenSize === 'small' ? 'center' : undefined

  return (
    <>
      <AboutWrapper>
        <AboutBanner />
      </AboutWrapper>

      <SectionStyled>
        <Box direction={contentDirection} pad="xlarge">
          <Box basis="1/2">
            <Box direction="row" align="center" margin={{ bottom: 'large' }}>
              <Square margin={{ right: 'medium' }} background="white">
                <Image src={missionIcon} fill />
              </Square>
              <Heading level="2">O Atendo em Libras</Heading>
            </Box>
            <Paragraph fill>
              O Atendo em Libras é uma plataforma online e gratuita, que centraliza informações de profissionais que
              atendem utilizando a Língua Brasileira de Sinais (Libras). As informações são alimentadas pela própria
              comunidade e pelos profissionais que visam diminuir barreiras na comunicação com quem precisa de
              atendimento. Dessa forma, suas principais funcionalidades são o cadastro e a busca destes profissionais,
              facilitando o acesso das pessoas surdas aos serviços e proporcionando a divulgação dos profissionais.
            </Paragraph>
          </Box>
          <Box basis="1/2">
            <Video controls>Your browser does not support the Video tag.</Video>
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box direction={screenSize === 'small' ? 'column' : 'row-reverse'} pad="xlarge" background="#F7F8FA">
          <Box basis="1/2">
            <Box direction="row" align="center" margin={{ bottom: 'large' }}>
              <Square margin={{ right: 'medium' }} background="#5996F7">
                <Image src={missionIcon} fill />
              </Square>
              <Heading level="2">Nosso propósito</Heading>
            </Box>
            <Paragraph fill>
              O Atendo em Libras é um projeto que teve seus primeiros passos motivados pelas novas necessidades de
              atendimento impostas pela pandemia do coronavírus. Contudo, não se limita a elas. Portanto, a iniciativa
              tem como objetivo promover o acesso a profissionais preparadas para atender a comunidade surda com
              comunicação humanizada em Libras, trazendo autonomia e independência para as pessoas surdas no atendimento
              às suas necessidades.
            </Paragraph>
          </Box>
          <Box basis="1/2">
            <Video controls>Your browser does not support the Video tag.</Video>
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center" pad="xlarge">
          <Heading level="2" margin={{ bottom: 'xlarge' }}>
            As idealizadoras
          </Heading>
          <Box direction={contentDirection} justify="between">
            {idealizadoras.map((idealizadora) => (
              <Box key={idealizadora.nome} align="center" direction={contentDirection} basis="48%">
                <DropletAvatar
                  dropletDirection="top-right"
                  size="120px"
                  src={idealizadora.avatar}
                  round="large"
                  margin={screenSize === 'small' ? {} : { right: 'small' }}
                  flex={{ shrink: 0 }}
                />
                <Box align={textAlign}>
                  <Heading level="3">{idealizadora.nome}</Heading>
                  <Heading color="#5996F7" level="4">
                    {idealizadora.role}
                  </Heading>
                  <Paragraph textAlign={textAlign}>{idealizadora.paragraph}</Paragraph>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center" pad={screenSize === 'small' ? { vertical: 'small' } : 'xlarge'}>
          <Heading level="2" margin={{ bottom: 'xlarge' }}>
            Conheça quem faz parte
          </Heading>
          <Box direction="row" wrap justify="center">
            {participantes.map((participant) => (
              <Box
                key={participant.nome}
                align="center"
                basis={screenSize === 'small' ? '46%' : '18%'}
                pad={{ bottom: 'large', left: 'small', right: 'small' }}
              >
                <DropletAvatar dropletDirection="top-left" size="120px" src={participant.avatar} round="large" />
                <Heading level="3" textAlign="center">
                  {participant.nome}
                </Heading>
                <Heading color="#5996F7" level="4" textAlign="center">
                  {participant.role}
                </Heading>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>
    </>
  )
}

export { About }
