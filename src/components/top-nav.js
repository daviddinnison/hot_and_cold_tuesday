import React from 'react';
import {connect} from 'react-redux';
import {newGuess, toggleWhat} from '../actions';
import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            // console.log('dispatched topnav')
            this.props.dispatch(newGuess(event));
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            console.log('What screen dispatched');
            this.props.dispatch(toggleWhat(event));
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};
export default connect()(TopNav);
