import React from 'react'

import { flags } from '../const'
import { fetchJoke } from './fetch'
import { Joke } from './Joke'
import { Button } from '../components/Button'
import { Loader } from '../components/Loader'
// import { Card } from '../components/Card'

/**
 * Returns only jokes with unique ID from provided `jokes`.
 * Will remove duplicates.
 *
 * @param {Array} jokes
 */
function getUniqueJokes(jokes) {
  return jokes.reduce(
    (acc, joke) => {
      if (!acc.ids.includes(joke.id)) {
        acc.ids.push(joke.id)
        acc.jokes.push(joke)
      }

      return acc
    },
    { ids: [], jokes: [] }
  ).jokes
}

export class JokeContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      jokes: [],
      isLoading: true,
      error: null,
      blacklist: [...Object.keys(flags)],
    }

    this.setError = this.setError.bind(this)
    this.fetchJokes = this.fetchJokes.bind(this)
  }

  setError() {
    if (!this.state.error) {
      this.setState({ error: "Couldn't get jokes", isLoading: false })
    }
  }

  fetchJokes() {
    if (!this.state.isLoading) {
      this.setState({ isLoading: true })
    }

    // Promise.all function allows concurrent promises instead of chained
    Promise.all([fetchJoke(), fetchJoke(), fetchJoke(), fetchJoke(), fetchJoke()])
      .then(jokes => {
        if (jokes.includes(null)) {
          this.setError()
        }

        const allJokes = [...this.state.jokes, ...jokes]
        // jokes should be filtered because there are possible duplicates
        const uniqueJokes = getUniqueJokes(allJokes)

        this.setState({ jokes: uniqueJokes, isLoading: false })
      })
      .catch(this.setError)
  }

  componentDidMount() {
    this.fetchJokes()
  }

  render() {
    const {
      isLoading,
      error,
      jokes,
      // blacklist
    } = this.state

    if (isLoading && !jokes.length) {
      return (
        <div className="button-wrapper">
          <Loader />
        </div>
      )
    }

    if (error || !jokes.length) {
      return (
        <div>
          <h2>No Jokes</h2>
        </div>
      )
    }

    return (
      <div>
        {/* <Card>
          <p>Remove Jokes</p>
          {Object.keys(flags).map(value => {
            const label = flags[value]

            return (
              <label key={value}>
                <input type="checkbox" />
                <span>{label}</span>
              </label>
            )
          })}
        </Card> */}
        {jokes.map(joke => (
          <Joke key={joke.id} joke={joke} />
        ))}
        <div className="button-wrapper">
          {isLoading ? <Loader /> : <Button onClick={() => this.fetchJokes()}>Show more</Button>}
        </div>
      </div>
    )
  }
}
