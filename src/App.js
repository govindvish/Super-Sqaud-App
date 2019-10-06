import React, { Component } from 'react';

import './App.css';
import CharacterList from './containers/CharacterList';
import HeroList from './containers/HeroList';
import SquadStats from './containers/SquadStats';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="App">
                <h2 className="App-header">Super Squad</h2>
                <div className="row">
                    <div className="col-md-4">
                        <CharacterList />
                    </div>
                    <div className="col-md-4">
                        <HeroList />
                    </div>
                    <div className="col-md-4">
                        <SquadStats />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
