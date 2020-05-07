import React from 'react'
import styled from 'styled-components'

import { Children, Stylable } from '../../utils'

const Title = styled.h1`
  margin: 16px 24px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 1.6;
  text-transform: uppercase;
`

const StyledText = styled.div`
  line-height: 1.4;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin: 16px 0;
`

interface TextProps extends Children, Stylable {
  title?: boolean
}

export function Text({ title = false, children, ...styles }: TextProps) {
  if (title) {
    return <Title {...styles}>{children}</Title>
  }

  return <StyledText {...styles}>{children}</StyledText>
}
