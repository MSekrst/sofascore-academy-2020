import React from 'react'

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = { words: ['Hello', 'Again', 'SofaScore', 'Academy'] }
  }

  render() {
    const { words } = this.state

    console.log(words)

    return (
      <div>
        <h3>
          {words.map((word, index) => (
            <span key={index} style={{ marginLeft: 8 }}>
              {word}
            </span>
          ))}
        </h3>

        <button
          onClick={() => {
            const wordsCopy = [...words]
            this.setState({ words: wordsCopy.sort() })
          }}
        >
          SORT
        </button>
      </div>
    )
  }
}
