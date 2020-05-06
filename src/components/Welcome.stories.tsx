import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import React from 'react'

export default {
  title: 'Welcome',
  component: Welcome,
}

export const ToStorybook = () => <Welcome showApp={linkTo('Card/MDX')} />

ToStorybook.story = {
  name: 'to Storybook',
}
