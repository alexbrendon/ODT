import React from 'react';
import DraftPlayer from './DraftPlayer';
import DraftCountry from './DraftCountry';
import { randomNum } from '../helpers';


class DraftEvent extends React.Component {
	constructor(props){
		super(props);

		this.remainingPlayers = this.remainingPlayers.bind(this);
		this.pickingPlayer    = this.pickingPlayer.bind(this);

	}


	pickingPlayer(key) {
		// Get only the player that is currently picking
		const players = this.props.players;

		// Render remaining players to the page
		if( players[key].isPicking ){
			return <p key={key} className="pickerName">{players[key].name}</p>
		}		
	}

	remainingPlayers(key) {
		// Get only the players that are not picking and have not already picked
		const players = this.props.players;

		// Render remaining players to the page
		if( !players[key].isPicking && !players[key].hasPicked ){
			return <li key={key}>{players[key].name}</li>
		}		
	}


	render(){
		const playerKeys = Object.keys(this.props.players);


		return (
			<div className="draftEvent">
			
				<h2 className="eventName">{this.props.event.name}</h2>
				<button onClick={this.props.getNewPicker}>Get Picker</button>

				{playerKeys.map( this.pickingPlayer )}

				<ul className="draftPlayers">
					{playerKeys.map( this.remainingPlayers )}
				</ul>

				<ul className="countries">
					{
						Object.keys( this.props.countries ).map( (key) => <DraftCountry key={key} country={this.props.countries[key]} pickCountry={this.props.pickCountry} /> )
					}
				</ul>
			</div>
		)
	}
}


export default DraftEvent;