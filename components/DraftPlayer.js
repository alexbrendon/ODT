import React from 'react';


class DraftPlayer extends React.Component {
	constructor(props){
		super(props);

		this.pickingPlayer = this.pickingPlayer.bind(this);
		this.remainingPlayers = this.remainingPlayers.bind(this);
	}

	pickingPlayer(key) {
		// Get only the player that is currently picking
		const players = this.props.players;

		// Render remaining players to the page
		if( players[key].isPicking ){
			return <p key={key} className="pickerName">{players[key].name}!</p>
		}		
	}

	remainingPlayers(key) {
		// Get only the players that are not picking and have not already picked
		const players = this.props.players;

		// Render remaining players to the page
		if( !players[key].isPicking && !players[key].hasPicked ){
			return <li className="remainingPickers" key={key}>{players[key].name}</li>
		}		
	}


	render(){
		const playerKeys = Object.keys(this.props.players);

		if( this.props.draft){
			return (
				<div>
					{playerKeys.map( this.pickingPlayer )}

					<ul className="draftPlayers">
						{playerKeys.map( this.remainingPlayers )}
					</ul>
				</div>
			)
		}

		return null;
	}
}


export default DraftPlayer;