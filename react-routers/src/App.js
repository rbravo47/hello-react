import React, { Component } from 'react';


// Router: needs to wrap around your app as much as possible... (or at least those that has routes...)
// Link: to navigate into another url. 
// Route: to render something when it matches the url
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


// https://www.youtube.com/watch?v=cKnc8gXn80Q&feature=emb_logo&t=144s
class App extends Component {

  state = {
    gists: null
  }

  componentDidMount() {
    fetch('https://api.github.com/gists').then(response => response.json()).then(gists => this.setState({ gists }));
  }

  render() {

    const { gists } = this.state;
    console.log(gists)

    const items = gists ?
      gists.map(gist => (
        <li key={gist.id}>
          <Link to={`/g/${gist.id}`}>
            {gist.description || '[no description]'}
          </Link>
        </li>)
      )
      :
      <div>...loading</div>;

    return (

      <Router>
        <div>
          <section>
            <ul>{items}</ul>
          </section>
          <main>
            <Route exact={true} path="/" render={() => (<h1>Welcome</h1>)}></Route>

            {
              gists && (<Route path="/g/:gistId" render={({ match }) => (
                <Gist key={match.params.gistId} gist={gists.find(g => g.id === match.params.gistId)} />
              )} />)
            }
          </main>
        </div >
      </Router>

    );
  }
}

const Gist = ({ gist }) => {
  return (
    <div>
      <h1>{gist.description || '[no description]'}</h1>
      <ul>
        {Object.keys(gist.files).map(fileName => (
          <li key={fileName}>
            <b>{fileName}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
