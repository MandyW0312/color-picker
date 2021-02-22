import React, { Component } from 'react'

// state = {
//   color:
// }

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Color Picker</h1>
        </header>
        <main>
          <section>
            <label htmlFor="Hue">Hue: </label>
            <input type="range" min="0" max="360" name="Hue"></input>
          </section>
          <section>
            <label htmlFor="Saturation">Saturation: </label>
            <input type="range" min="0" max="100" name="Saturation"></input>
          </section>
          <section>
            <label htmlFor="Lightness">Lightness: </label>
            <input type="range" min="0" max="100" name="Lightness"></input>
          </section>
        </main>
        <footer>This Color Picker App was created by Mandy Wade</footer>
      </div>
    )
  }
}
