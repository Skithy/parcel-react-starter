import { render, screen } from '@testing-library/react'
import React from 'react'

import { App } from './App'

describe('App', () => {
  it('renders something', () => {
    render(<App />)
    expect(screen.queryByText('Hello')).toBeInTheDocument()
  })
})
