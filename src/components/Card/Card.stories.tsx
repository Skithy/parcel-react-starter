import { text } from '@storybook/addon-knobs'
import React from 'react'

import { Card } from './Card'

export default {
  title: 'Card/CSF',
  component: Card,
}

export const Text = () => (
  <Card title={text('title', 'Hello')} subtitle={text('subtitle', 'world')} />
)
