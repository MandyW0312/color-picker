import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  componentDidMount() {
    this.setState({
      hue: Math.floor(Math.random() * (360 - 0)) + 0,
      saturation: Math.floor(Math.random() * (100 - 0)) + 0,
      lightness: Math.floor(Math.random() * (100 - 0)) + 0,
    })
  }

  updateHue = event => {
    this.setState({
      hue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <header
          style={{
            backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
          }}
        >
          <h1>Color Picker</h1>
        </header>
        <main>
          <h2>
            This color is: hsl({this.state.hue}, {this.state.saturation}%,
            {this.state.lightness}%)
          </h2>
          <button onClick={this.randomColor}>Random Color</button>
          <section>
            <label htmlFor="Hue">Hue: </label>
            <input
              type="range"
              min="0"
              max="360"
              onInput={this.updateHue}
              value={this.state.hue}
              name="Hue"
            ></input>
          </section>
          <section>
            <label htmlFor="Saturation">Saturation: </label>
            <input
              type="range"
              min="0"
              max="100"
              onInput={this.updateSaturation}
              value={this.state.saturation}
              name="Saturation"
            ></input>
          </section>
          <section>
            <label htmlFor="Lightness">Lightness: </label>
            <input
              type="range"
              min="0"
              max="100"
              onInput={this.updateLightness}
              value={this.state.lightness}
              name="Lightness"
            ></input>
          </section>
        </main>
        <footer>This Color Picker App was created by Mandy Wade</footer>
      </div>
    )
  }
}
