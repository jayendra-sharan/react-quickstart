import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey! {this.props.name}</h1>
        <div className='customClass'>
          This is custom (s)css.
        </div>
        <div className="container jumbotron">
          <span>Bootstrap has already been included, and it is Jumbotron class.</span>
        </div>
        <footer>Developed by: <a href="http://jayendrasharan.in">Jayendra Sharan</a></footer>
      </div>
    )
  }
}

export default App;
