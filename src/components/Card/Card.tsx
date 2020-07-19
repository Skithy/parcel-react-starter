import { Box, Heading } from 'grommet'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledCard = styled(Box)`
  border: 2px solid red;
`

interface CardProps {
  title: string
  subtitle?: string
}

/**
 * Hello! this is Card
 */
export const Card: FunctionComponent<CardProps> = ({ title, subtitle }) => (
  <StyledCard>
    <Heading>{title}</Heading>
    {subtitle && <Heading level={2}>{subtitle}</Heading>}
  </StyledCard>
)
