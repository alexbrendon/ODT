import React from 'react';
import DraftEvent from './DraftEvent';
import { randomNum } from '../helpers';
import { shuffle } from '../helpers';



class Draft extends React.Component {
	constructor(props){
		super(props);

		this.startDraft    = this.startDraft.bind(this);
		this.getNextEvent  = this.getNextEvent.bind(this);
		this.getNextPicker = this.getNextPicker.bind(this);
		this.pickCountry   = this.pickCountry.bind(this);
		this.resetPickers  = this.resetPickers.bind(this);
		

		this.state = {
			event: {},
			draft: {},
			picker: {},
			eventIndex: 0,
			playerIndex: 0
		}

		this.playerIndex = 0;
	}

	startDraft() {
		// Shuffle Events
		const shuffledEvents = shuffle( this.props.events.slice() );
		// const shuffledEvents = this.props.events.slice();
		this.setState({ shuffledEvents: shuffledEvents });
		
		// Pick the next item in the shuffled event list
		this.getNextEvent( shuffledEvents );

		// Set draft to On
		this.setState({ draft: {on: true} });
	}


	getNextEvent( shuffledEvents ) {
		const events = this.state.shuffledEvents || shuffledEvents;
		const currentEvent = events[ this.state.eventIndex ];

		this.resetPickers();

		this.setState({ eventIndex: this.state.eventIndex + 1 });
		this.setState({ event: currentEvent });
	}

	getNextPicker( $shuffledPlayers ) {
		// Set the the next player from the shuffled player array
		// Check to see if shuffled Players in the state is set yet, otherwise use the passed in parameter
		const shuffPlayers = this.state.shuffledPlayers ? this.state.shuffledPlayers : $shuffledPlayers;
		const pickingPlayer = shuffPlayers[ this.playerIndex ];


		// If the all of the players have not picked
		if(this.playerIndex <= shuffPlayers.length - 1 ){
			if(!pickingPlayer.hasPicked){
				pickingPlayer.isPicking = true;
				this.props.updatePlayer( pickingPlayer.key, pickingPlayer);
				this.setState({ picker: pickingPlayer });

				// Increment the playerIndex to grab the next in line
				this.playerIndex += 1;
			}
		// If all players have picked, move on to the next event
		} else {
			this.playerIndex = 0;
			this.getNextEvent();

			

			// Set the event to be complete since all players have chosen on it
			const event = this.state.event;
			event.complete = true;

			// Update the main events object with this new event data
			this.props.updateEvent( this.state.event.key, event );
		}
	}

	resetPickers() {
		// Reset picking flags
		this.props.resetPlayerPicks();
		// Copy player object
		const players = {...this.props.players};
		// Convert the players object into an array
		const playerArray = Object.keys(players).map( (key) => players[key] );
		// Randomize the player array
		shuffle(playerArray);
		this.setState({ shuffledPlayers: playerArray });
		// Reset the player index for counting
		this.setState({ playerIndex: 0 });
		// Grab the next picker
		this.getNextPicker( playerArray );
	}

	


	// A Player chooses their country
	// Assigns a selected country and player to the current event
	pickCountry( countryName ) {
		const event = {...this.state.event};
		// Grab the current picking player
		const pickingPlayer = this.props.players[ this.state.picker.key ];
		
		// if the picks don't exist yet in this evet, create it.
		let picks = event.picks || [];

		picks.push({ 
			player: pickingPlayer,
			country: countryName
		});

		// Sync the event with the new pick
		event.picks = picks;
		this.setState({ event: event });

		// This player is done picking, find a new one.
		pickingPlayer.isPicking = false;
		pickingPlayer.hasPicked = true;
		this.props.updatePlayer( this.state.picker.key, pickingPlayer);

		this.getNextPicker();
	}

	


	render(){
		return (
			<div className="draft">
				<h2>Draft</h2>
				<button onClick={this.startDraft}>Start Draft</button>
				<button onClick={this.props.resetPlayerPicks}>Reset Player Picks</button>

				{ this.state.draft.on ? <DraftEvent 
					event={this.state.event} 
					players={this.props.players} 
					countries={this.props.countries}
					getNextPicker={this.getNextPicker}
					picker={this.state.picker}
					pickCountry={this.pickCountry} /> : null }
			</div>
		)
	}
}


export default Draft;