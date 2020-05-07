import { _Children, _Stylable } from './types'

export * from './styles'

// Interfaces cannot be re-exported
export interface Children extends _Children {}
export interface Stylable extends _Stylable {}
