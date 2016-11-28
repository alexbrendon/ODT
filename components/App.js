import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import ManagePlayers from './ManagePlayer';
import CurrentPicks from './CurrentPicks';
import { shuffle } from '../helpers';

import Draft from './Draft';
import base from '../base';
import dataEvents from './dataEvents';
import dataCountries from './dataCountries';


class App extends React.Component {
	constructor(){
		super();

		this.addPlayer        = this.addPlayer.bind(this);
		this.removePlayer     = this.removePlayer.bind(this);
		this.updatePlayer     = this.updatePlayer.bind(this);
		this.updateEvent      = this.updateEvent.bind(this);
		this.resetPlayerPicks = this.resetPlayerPicks.bind(this);
		this.setDraft         = this.setDraft.bind(this);

		// set initial state
		this.state = {
			players: {},
			medals: {},
			countries: {},
			events: {},
			draft: false
		};
	}

	componentDidMount(){
		// Shuffle the events
		let shuffleEvents = shuffle(dataEvents.Events);
		// Set the key in each event to the new array key in the shuffled order
		shuffleEvents.map( (event, i) => event.key = i );

		this.setState({ events: shuffleEvents });
		this.setState({ countries: dataCountries.Countries });
		// const url = 'https://restcountries.eu/rest/v1/capital/tallinn';
		// fetch(url)
			// .then( (result) => {
				// this.setState({ medals: result.body });
				// console.log(result);
			// });
	}

	componentWillMount() {
		// this runs right before the app is rendered
		this.ref = base.syncState('ODT/players',
			{
				context: this,
				state: 'players'
			});
	}

	addPlayer( player ){
		// copy our state
		const players = {...this.state.players};
		// add in our new player
		const timestamp = Date.now();
		players[`player-${timestamp}`] = player;
		// set state
		this.setState({ players: players });
	}

	removePlayer( key ) {
		const players = {...this.state.players};
		players[key] = null;
		this.setState({ players: players });
	}

	updatePlayer( key, updatedPlayer ){
		const players = {...this.state.players};
		players[key] = updatedPlayer;
		this.setState({ players: players });
	}

	updateEvent( key, updatedEvent ) {
		const events = this.state.events.slice();
		events[key] = updatedEvent;
		this.setState({ events: events });
	}

	// Resets all flags for player picking to reset for a new event
	resetPlayerPicks() {
		const players = {...this.state.players};

		for (var key in players ){
			players[key].hasPicked = false;
			players[key].isPicking = false;
		}

		this.setState({ players });
	}

	setDraft() {
		this.setState({ draft: true });

		// Temporary for testing app
		const players = {...this.state.players};

		for (var key in players ){
			players[key].picks = [];
		}

		this.setState({ players });
	}

	

	render(){

		return (
			<div className="ODT">
				<header>
					<h1>ODT</h1>
					<ManagePlayers addPlayer={this.addPlayer} players={this.state.players} removePlayer={this.removePlayer} />
				</header>

				<CurrentPicks events={this.state.events} players={this.state.players} />

				<Draft 
				events={this.state.events} 
				players={this.state.players} 
				countries={this.state.countries}
				updatePlayer={this.updatePlayer}
				resetPlayerPicks={this.resetPlayerPicks}
				updateEvent={this.updateEvent}
				setDraft={this.setDraft}
				draft={this.state.draft} />
			</div>
		)
	}
}


export default App;