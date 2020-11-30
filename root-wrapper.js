import { MDXProvider } from '@mdx-js/react'
import React from 'react'

import './src/styles/styles.scss'

const components = {}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)