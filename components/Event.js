import React from 'react';

class Event extends React.Component {

	constructor() {
		super();

		this.setPlayer = this.setPlayer.bind(this);
	}


	setPlayer(e, key) {
		// console.log(this.eventSelect.value);
		console.log( key );
		const events = this.props.state.events;  
		console.log(events);
	}


	render() {		
		const players = this.props.players;


		return (
			<li>
				{this.props.details.name}
				<form ref={(input) => this.setPlayerForm = input} onChange={ (e) => this.setPlayer(e, this.props.index ) }>
					<select ref={(input) => this.eventSelect = input}>
						<option value="choose">Choose</option>
						{
							Object.keys( players ).map( (key) => <option key={key} value={players[key].name}>{players[key].name}</option> )
							
						}
					</select>
				</form>
			</li>
		)
	}
}

export default Event;