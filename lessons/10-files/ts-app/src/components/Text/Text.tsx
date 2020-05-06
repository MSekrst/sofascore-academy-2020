import React from 'react'

import { Children, Stylable } from '../../utils'

export function Text({ children, ...styles }: Children & Stylable) {
  return <div {...styles}>{children}</div>
}
