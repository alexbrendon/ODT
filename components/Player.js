import React from 'react';

class Player extends React.Component {
	render() {
		return (
			<li>{this.props.details.name} <span className="close" onClick={() => this.props.removePlayer( this.props.index )}>x</span></li>
		)
	}
}

export default Player;