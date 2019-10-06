import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addCharacterById } from '../store/actions/index';

class CharacterList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <h4 className="list-group-item">Characters</h4>
                    {
                        this.props.characters.map(char =>
                            <li key={char.id} className="list-group-item">
                                <div className="list-item">{char.name}</div>
                                <div className="list-item right-btn" onClick={() => this.props.addCharacterById(char.id)}>+</div>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ characters: state.character });
const mapDispatchToProps = dispatch => bindActionCreators({ addCharacterById }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);