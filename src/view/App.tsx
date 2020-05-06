import { Button } from 'grommet'
import React from 'react'
import styled from 'styled-components'

import { Card } from '~/components/Card/Card'

const FancyButton = styled(Button)`
  color: red;
`

export const App = () => (
  <div>
    <FancyButton label="hi" />
    <Button label="hi" />
    <Card title="Hello" subtitle="world" />
  </div>
)
