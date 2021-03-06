import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderNav } from './HeaderNav'
import { ResponsiveContext } from 'grommet'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'

describe('HeaderNav component', () => {
  const history = createMemoryHistory()

  describe('when SignUp feature is active', () => {
    describe('when view is dektop', () => {
      it('renders a navigational bar', () => {
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <HeaderNav />
            </FeatureTogglesContext.Provider>
          </Router>
        )

        expect(view.getByRole('navigation')).toBeInTheDocument()
      })

      it('renders a list of navigational links', () => {
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <HeaderNav />
            </FeatureTogglesContext.Provider>
          </Router>
        )

        expect(view.findAllByRole('listitem')).not.toBe([])
      })

      it('renders a Home button', () => {
        const history = createMemoryHistory()
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <HeaderNav />
            </FeatureTogglesContext.Provider>
          </Router>
        )

        history.push('/some-route')
        fireEvent.click(view.getByText(/Home/i))

        expect(history.location.pathname).toBe('/')
      })

      it('renders an About Us button', () => {
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <HeaderNav />
            </FeatureTogglesContext.Provider>
          </Router>
        )

        fireEvent.click(view.getByText(/Sobre o Projeto/i))

        expect(history.location.pathname).toBe('/sobre')
      })

      it('renders an Sign Up button', () => {
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <HeaderNav />
            </FeatureTogglesContext.Provider>
          </Router>
        )

        fireEvent.click(view.getByText(/Cadastre-se aqui/i))

        expect(history.location.pathname).toBe('/cadastrar')
      })
    })

    describe('when view is mobile', () => {
      it('displays a hamburger icon for main menu', () => {
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <ResponsiveContext.Provider value={'small'}>
                <HeaderNav />
              </ResponsiveContext.Provider>
            </FeatureTogglesContext.Provider>
          </Router>
        )

        expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
      })

      it('displays menu when menu button is clicked', () => {
        let view = render(
          <Router history={history}>
            <FeatureTogglesContext.Provider value={{ signUp: true }}>
              <ResponsiveContext.Provider value={'small'}>
                <HeaderNav />
              </ResponsiveContext.Provider>
            </FeatureTogglesContext.Provider>
          </Router>
        )

        const button = view.getByRole('button', { name: 'Menu Button' })

        expect(view.queryByRole('menu')).toBeNull()
        fireEvent.click(button)
        expect(view.getByRole('menu')).toBeInTheDocument()
      })
    })
  })

  describe('when SignUp feature is inactive', () => {
    describe('when view is dektop', () => {
      it('renders a navigational bar', () => {
        let view = render(
          <Router history={history}>
            <HeaderNav />
          </Router>
        )

        expect(view.getByRole('navigation')).toBeInTheDocument()
      })

      it('renders a list of navigational links', () => {
        let view = render(
          <Router history={history}>
            <HeaderNav />
          </Router>
        )

        expect(view.findAllByRole('listitem')).not.toBe([])
      })

      it('renders a Home button', () => {
        const history = createMemoryHistory()
        let view = render(
          <Router history={history}>
            <HeaderNav />
          </Router>
        )

        history.push('/some-route')
        fireEvent.click(view.getByText(/Home/i))

        expect(history.location.pathname).toBe('/')
      })

      it('renders an About Us button', () => {
        let view = render(
          <Router history={history}>
            <HeaderNav />
          </Router>
        )

        fireEvent.click(view.getByText(/Sobre o Projeto/i))

        expect(history.location.pathname).toBe('/sobre')
      })
    })

    describe('when view is mobile', () => {
      it('displays a hamburger icon for main menu', () => {
        let view = render(
          <Router history={history}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderNav />
            </ResponsiveContext.Provider>
          </Router>
        )

        expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
      })

      it('displays menu when menu button is clicked', () => {
        let view = render(
          <Router history={history}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderNav />
            </ResponsiveContext.Provider>
          </Router>
        )

        const button = view.getByRole('button', { name: 'Menu Button' })

        expect(view.queryByRole('menu')).toBeNull()
        fireEvent.click(button)
        expect(view.getByRole('menu')).toBeInTheDocument()
      })
    })
  })
})
