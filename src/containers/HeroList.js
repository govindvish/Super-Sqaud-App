import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeCharacterById } from '../store/actions/index';

class HeroList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <h4 className="list-group-item">Your Heroes</h4>
                    {
                        this.props.heroes.map(hero =>
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">{hero.name}</div>
                                <div className="list-item right-btn" onClick={() => this.props.removeCharacterById(hero.id)}>x</div>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ heroes: state.heroes });
const mapDispatchToProps = dispatch => bindActionCreators({ removeCharacterById }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HeroList);