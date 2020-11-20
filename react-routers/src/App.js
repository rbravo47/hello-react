import React, { Component } from 'react';


class App extends Component {

  state = {
    gists: []
  }

  componentDidMount() {
    fetch('https://api.github.com/gists').then(response => response.json()).then(responseData => this.setState({ gists: responseData }))
  }

  render() {
    const items = this.state.gists.map(gist => (<li key={gist.id}><a href={gist.url}>{gist.url}</a></li>))
    return (
      <div>
        <section>
          <ul>
            {items}
          </ul>
        </section>

        <main>
          Content
        </main>
      </div >
    );
  }

}

export default App;
