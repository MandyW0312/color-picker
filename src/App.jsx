import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 0,
  }

  componentDidMount() {
    this.setState({
      hue: Math.floor(Math.random() * (360 - 0)) + 0,
      saturation: Math.floor(Math.random() * (100 - 0)) + 0,
      lightness: Math.floor(Math.random() * (100 - 0)) + 0,
      alpha: Math.round((Math.random() * (1 - 0) + 0) * 100) / 100,
    })
  }

  updateHue = event => {
    this.setState({
      hue: event.target.value,
    })
  }

  updateSaturation = event => {
    this.setState({
      saturation: event.target.value,
    })
  }

  updateLightness = event => {
    this.setState({
      lightness: event.target.value,
    })
  }

  updateAlpha = event => {
    this.setState({
      alpha: event.target.value,
    })
  }

  randomColor = event => {
    this.setState({
      hue: Math.floor(Math.random() * (360 - 0)) + 0,
      saturation: Math.floor(Math.random() * (100 - 0)) + 0,
      lightness: Math.floor(Math.random() * (100 - 0)) + 0,
      alpha: Math.round((Math.random() * (1 - 0) + 0) * 100) / 100,
    })
  }

  render() {
    return (
      <div>
        <header
          style={{
            backgroundColor: `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`,
          }}
        ></header>
        <main>
          <h2>
            The color above is: hsla({this.state.hue}, {this.state.saturation}%,
            {this.state.lightness}%, {this.state.alpha})
          </h2>
          <button onClick={this.randomColor}>Random Color</button>
          <section className="image">
            <img
              src="https://wemakemoviesonweekendsdotcom.files.wordpress.com/2017/06/maxresdefault-1.jpg"
              height="375"
              width="800"
            />
          </section>
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
          <section>
            <label htmlFor="Alpha">Alpha: </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              onInput={this.updateAlpha}
              value={this.state.alpha}
              name="Alpha"
            ></input>
          </section>
        </main>
        <footer>This Color Picker App was created by Mandy Wade</footer>
      </div>
    )
  }
}
