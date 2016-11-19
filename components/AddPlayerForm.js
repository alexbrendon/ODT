import React from 'react';

class AddPlayerForm extends React.Component {
	
	createPlayer( event ) {
		event.preventDefault();

		const player = {
			name: this.refs.name.value,
			medalCount: {
				gold: null,
				silver: null,
				bronze: null
			}
		}

		this.props.addPlayer( player );
		this.playerForm.reset();

	}

	render() {
		return (
			<form onSubmit={(e) => this.createPlayer(e) } ref={(input) => this.playerForm = input}>
			<input ref="name" type="text" placeholder="Name" />
				<button onClick={this.props.createPlayer}>Add</button>
			</form>
		)
	}
}

export default AddPlayerForm;