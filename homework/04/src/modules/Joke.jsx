import React from 'react'
import { Card } from '../components/Card'
import { jokeCategoryColors } from '../const'

const SINGLE = 'single'
const TWO_PART = 'twopart'
const SUPPORTED_TYPES = [SINGLE, TWO_PART]

export class Joke extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isAllRevealed: false }

    this.revealPunchline = this.revealPunchline.bind(this)
  }

  revealPunchline() {
    if (this.state.isAllRevealed) {
      return
    }

    this.setState({ isAllRevealed: true })
  }

  render() {
    const {
      joke: { category, type, setup, delivery, joke },
    } = this.props

    const color = jokeCategoryColors[category]

    if (!SUPPORTED_TYPES.includes(type)) {
      console.warn(`Unsupported type of joke: '${type}'`)
      return null
    }

    const jokeColorStyle = { color }
    let jokeMarkup = null
    let jokeHandler = null

    if (type === SINGLE) {
      jokeMarkup = (
        <p>
          <span className="joke-punchline joke-no-setup" style={jokeColorStyle}>
            {joke}
          </span>
        </p>
      )
    }

    if (type === TWO_PART) {
      jokeHandler = this.revealPunchline
      jokeMarkup = (
        <section>
          {setup}
          <p
            className={`joke-punchline color-primary ${!this.state.isAllRevealed ? 'joke-punchline-hidden' : ''} `}
            style={jokeColorStyle}
          >
            {delivery}
          </p>
        </section>
      )
    }

    return (
      <Card style={{ cursor: jokeHandler ? 'pointer' : 'none' }} onClick={jokeHandler}>
        {jokeMarkup}
      </Card>
    )
  }
}
