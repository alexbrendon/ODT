import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';
import Event from './Event';
import base from '../base';
import events from './events';


class App extends React.Component {
	constructor(){
		super();

		this.addPlayer = this.addPlayer.bind(this);
		this.removePlayer = this.removePlayer.bind(this);

		// set initial state
		this.state = {
			players: {},
			medals: {},
			countries: {},
			events: {}
		};
	}

	componentDidMount(){
		this.setState({ events: events});
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


	render(){
		return (
			<div className="test">
				<h1>ODT</h1>
				<AddPlayerForm addPlayer={this.addPlayer} />
				<ul className="player-list">
					{
						Object.keys( this.state.players ).map( (key) => <Player key={key} index={key} details={this.state.players[key]} removePlayer={this.removePlayer} /> )
					}
				</ul>
				<ul className="eventList">
					{
						Object.keys( this.state.events ).map( (key) => <Event key={key} index={key} details={this.state.events[key]} players={this.state.players} /> )
					}
				</ul>
			</div>
		)
	}
}


export default App;