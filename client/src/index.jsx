import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      gotInitialData: false
    }

    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    fetch('/repos')
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({ repos: json });
      })
      .catch(err => console.log('error getting repos', err));
  }

  search(term) {
    // console.log(`${term} was searched`);
    fetch('/repos', { method: 'POST', body: term })
      .then(() => this.getRepos());
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

