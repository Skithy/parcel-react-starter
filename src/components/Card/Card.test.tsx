import { render, screen } from '@testing-library/react'
import React from 'react'

import { Card } from './Card'

describe('Card', () => {
  it('renders title and subtitle', () => {
    render(<Card title="Hello" subtitle="world" />)

    expect(screen.queryByText('Hello')).toBeInTheDocument()
    expect(screen.queryByText('world')).toBeInTheDocument()
  })
})
