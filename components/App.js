import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';
import Draft from './Draft';
import base from '../base';
import data from './data';


class App extends React.Component {
	constructor(){
		super();

		this.addPlayer = this.addPlayer.bind(this);
		this.removePlayer = this.removePlayer.bind(this);
		this.updatePlayer = this.updatePlayer.bind(this);

		// set initial state
		this.state = {
			players: {},
			medals: {},
			countries: {},
			events: {}
		};
	}

	componentDidMount(){
		this.setState({ events: data.Events });
		this.setState({ countries: data.Countries });
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


	render(){

		return (
			<div className="test">
				<h1>ODT</h1>
				<div className="addPlayer">
					<AddPlayerForm addPlayer={this.addPlayer} />
					<ul className="player-list">
						{
							Object.keys( this.state.players ).map( (key) => <Player key={key} index={key} details={this.state.players[key]} removePlayer={this.removePlayer} /> )
						}
					</ul>
				</div>

				<Draft 
				events={this.state.events} 
				players={this.state.players} 
				countries={this.state.countries}
				updatePlayer={this.updatePlayer} />
			</div>
		)
	}
}


export default App;