import React from 'react'

import './Context.styles.css'

const themeOptions = ['light', 'dark']

//#region Context

/**
 * Context is usually in separate file (e.g. ThemeProvider.jsx)
 */
const ThemeContext = React.createContext() // context is dynamic, initial state will be set when rendering provider
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

//#endregion Context

export function ThemedApp() {
  // variable that controls theme selection
  const [theme, setTheme] = React.useState(themeOptions[0])

  console.log('Theme selected =', theme)

  return (
    <ThemeProvider value={{ themeSelected: theme, setTheme }}>
      <App />
    </ThemeProvider>
  )
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

//#region Layout - no theme needed

function Header() {
  return (
    <header className="layout-element">
      <Text>Pick theme:</Text>
      <Select options={themeOptions} />
    </header>
  )
}

function Main() {
  return (
    <main>
      <Title>Themed App</Title>
    </main>
  )
}

function Footer() {
  return (
    <footer className="layout-element">
      <Text>This footer has no purpose</Text>
    </footer>
  )
}

//#endregion Layout - no theme needed

//#region Theme influenced

class Text extends React.Component {
  // React will find nearest ThemeContext Provider and connect Text component as Consumer
  // Theme will be accessible with `this.context` -> note that this works only for single context
  // in case of multiple contexts, use `Consumer` component.
  static contextType = ThemeContext

  render() {
    return <p className={`${this.context.themeSelected} text`}>{this.props.children}</p>
  }
}

class Title extends React.Component {
  render() {
    return (
      // Consumer will insert context into function provided (Render Prop pattern) and that function can return markup that will be rendered
      <ThemeConsumer>
        {({ themeSelected }) => {
          return <h1 className={`${themeSelected} title`}>{this.props.children}</h1>
        }}
      </ThemeConsumer>
    )
  }
}

function Select({ options }) {
  // get current theme from context via useContext hook
  const { themeSelected, setTheme } = React.useContext(ThemeContext)

  const handleChange = React.useCallback(
    event => {
      const newValue = event.currentTarget.value

      setTheme(newValue)
    },
    [setTheme]
  )

  return (
    <select className={`${themeSelected} select`} value={themeSelected} onChange={handleChange}>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}

//#endregion Theme influenced
