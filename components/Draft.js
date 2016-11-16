import React from 'react';
import DraftEvent from './DraftEvent';
import { randomNum } from '../helpers';



class Draft extends React.Component {
	constructor(props){
		super(props);

		this.startDraft   = this.startDraft.bind(this);
		this.getNewEvent  = this.getNewEvent.bind(this);
		this.getNewPicker = this.getNewPicker.bind(this);
		this.pickCountry = this.pickCountry.bind(this);
		

		this.state = {
			event: {},
			draft: {},
			picker: {}
		}
	}

	startDraft() {
		const currentEvent = this.getNewEvent();
		const draft = {on: true};
		this.setState({ event: currentEvent });
		this.setState({ draft: draft });
	}

	getNewEvent() {
		const events = this.props.events;
		let event;
		
		// Filter by only events that have not been fully picked by everyone
		const availableEvents = events.filter( (event) => {
			return !event.picked;
		});

		const key = randomNum(0, availableEvents.length - 1);
		event = availableEvents[key];
		
		if (event) {
			event.picked = true; // This will be moved to a different method once all players have picked for the event
			return event;
		}
	}

	getNewPicker() {
		const players = {...this.props.players};
		const keys = Object.keys(players);

		const randNum = randomNum(0, keys.length - 1);
		const key = keys[randNum]; // Select the key using the random array item
		
		// Use the selected key to grab the random user
		const pickingPlayer = players[key];
		if(!pickingPlayer.hasPicked){
			pickingPlayer.isPicking = true;
			pickingPlayer.key = key;
			
			this.props.updatePlayer( key, pickingPlayer);
			this.setState({ picker: pickingPlayer });
		}
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

		this.getNewPicker();
	}

	


	render(){

		return (
			<div className="draft">
				<h2>Draft</h2>
				<button onClick={this.startDraft}>Start Draft</button>

				{ this.state.draft.on ? <DraftEvent 
					event={this.state.event} 
					players={this.props.players} 
					countries={this.props.countries}
					getNewPicker={this.getNewPicker}
					picker={this.state.picker}
					pickCountry={this.pickCountry} /> : null }
			</div>
		)
	}
}


export default Draft;