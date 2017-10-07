import React, { Component } from 'react';
import { DEFAULT_STATE } from './constants';
import pkg from '../package.json';
import './retro.css';

const renderListOf = Component => ({list}) => (
  list.allIds.map(id => <Component key={id} {...list.byId[id]} />)
);

const Test = props => <div>{props.text}</div>;
const ListOfTest = renderListOf(Test);
const ListSection = props => [
  <h2 key={`${props.title}-title`}>{props.title}</h2>,
  <div key={`${props.title}-container`}>
    <input type='text' />
    <ListOfTest list={props.list} />
  </div>
];

export class App extends Component {
  constructor() {
    super();
    this.state = {
      ...DEFAULT_STATE
    };
  }

  render() {
    return (
      <div className="retro">
        <header className="retro-header">
          <h1 className="retro-title">Sprint Retrospective</h1>
        </header>
        <main className='retro-main'>
          <ListSection title='Good' list={this.state.good} />
          <ListSection title='Bad' list={this.state.bad} />
          <ListSection title='Next' list={this.state.next} />
        </main>
        <footer className='retro-footer'>
          <p>Retrospective v{pkg.version}, React 16</p>
        </footer>
      </div>
    );
  }
}

export default App;
