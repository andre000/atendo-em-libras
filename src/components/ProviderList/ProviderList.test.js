import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProviderList } from './ProviderList'
import ProviderApi from '../../api/provider'
import mockProviders from '../../mocks/providers'

jest.mock('../../api/provider.js')

describe('ProviderList tests', () => {
  it('Component should render a provider card when showCard column is yes', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    const providerList = await screen.findByText('doctor-who@tardis.com')
    expect(providerList).toBeInTheDocument()
  })

  it('Component should not render a provider card when showCard column is no', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    const providerList = await screen.findAllByText('Contato')
    expect(providerList.length).toBeLessThanOrEqual(2)
  })

  it('Component should render error to find providers', async () => {
    ProviderApi.get.mockResolvedValue([])

    render(<ProviderList />)

    const providerList = await screen.findByRole('error')
    expect(providerList).toBeInTheDocument()
  })

  it('Component should show video call availability', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    const videoCallAvailability = await screen.findAllByText('Atende Online')
    expect(videoCallAvailability[0]).toBeInTheDocument()
  })

  it('Component should show empty space before loading providers', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    expect(screen.queryByRole('provider')).toBeNull()
    expect(screen.getByTestId('emptyList')).toBeInTheDocument()
    expect(await screen.findByText('doctor-who@tardis.com')).toBeInTheDocument()
  })
})
