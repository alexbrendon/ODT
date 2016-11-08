import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';
import base from '../base';
import events from './events';


class Main extends React.Component {
	constructor(){
		super();

		this.addPlayer = this.addPlayer.bind(this);

		// set initial state
		this.state = {
			players: {},
			medals: {},
			countries: {}
		};
	}

	componentDidMount(){
		console.log(events.Events);
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


	render(){
		return (
			<div className="test">
				<h1>ODT</h1>
				<ul className="player-list">
					{
						Object.keys( this.state.players ).map( (key) => <Player key={key} details={this.state.players[key]} /> )
					}
				</ul>
				<AddPlayerForm addPlayer={this.addPlayer} />
			</div>
		)
	}
}


export default Main;