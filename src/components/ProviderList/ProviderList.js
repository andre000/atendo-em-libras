import React, { Component } from 'react'
import { ResponsiveGrid } from '../ResposiveGrid'
import { ProviderCard } from '../ProviderCard'
import { getServiceProviders } from '../../api/spreadSheet'
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
}

const rows = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto'],
}

const fixedGridAreas = {
  small: [
    { name: 'header', start: [0, 0], end: [0, 0] },
  ],
  medium: [
    { name: 'header', start: [0, 1], end: [1, 0] },
  ]
}

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
});

class ProviderList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      providers: []
    }
  }

  loadServiceProvicers = async () => {
    const serviceProvidersJson = await getServiceProviders()
    this.setState({ providers: serviceProvidersJson })
    console.log(serviceProvidersJson);
  }

  componentDidMount() {
    this.loadServiceProvicers();
  }

  render() {
    const { providers } = this.state;
    return (
      <Grommet className="App" full theme={customBreakpoints}>
        <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
          {providers && providers.map((provider, id) => (
            <ProviderCard key={id}
              name={provider["Nome do profissional "]}
              licenseNumber={provider["Número de cadastro profissional "]}
              category={provider["Categoria "]}
              specialty={provider["Especialidade "]}
              videoCallAvailability={true}
              phoneNumber={provider["Telefone "]}
              email={provider["E-mail "]}
              city={provider["Cidade "]}
              state={provider["Estado "]}
              healthInsurance={provider["Planos de saúde aceitos"]}
              experience={provider["Apresentação "]}
              address={provider["Endereço de atendimento "]}
              videoCallPlatform={provider["Plataforma de Atendimento "]} />
          ))}
        </ResponsiveGrid>
      </Grommet>
    )
  }
}

export { ProviderList }