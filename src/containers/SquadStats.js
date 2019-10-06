import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SqaudStats extends Component {
    strength = () => {
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }

    intelligence = () => {
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence;
    }

    speed = () => {
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed;
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <h4 className="list-group-item">Sqaud Stats</h4>
                    <li className="list-group-item">
                        <b>Overall Strength : </b>{this.strength()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence : </b>{this.intelligence()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed : </b>{this.speed()}
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ heroes: state.heroes });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SqaudStats);