import React from 'react';
import AddPlayerForm from './AddPlayerForm';

class Player extends React.Component {
	render() {

		return (
			<li>{this.props.details.name}</li>
		)
	}
}

export default Player;