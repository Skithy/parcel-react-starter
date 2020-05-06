import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addDecorator(withKnobs)

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
