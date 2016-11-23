import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';



class ManagePlayers extends React.Component {
	constructor(){
		super();

		this.state = {
			showManage: false
		};

		this.toggleManagePlayers = this.toggleManagePlayers.bind(this);
		this.renderPlayerManage  = this.renderPlayerManage.bind(this);
	}


	toggleManagePlayers() {
		this.setState({ showManage: !this.state.showManage });
	}

	renderPlayerManage() {
		return (
			<div className="addPlayer">
				<AddPlayerForm addPlayer={this.props.addPlayer} />
				<ul className="player-list">
					{
						Object.keys( this.props.players ).map( (key) => <Player key={key} index={key} details={this.props.players[key]} removePlayer={this.props.removePlayer} /> )
					}
				</ul>
			</div>
		)
	}


	render(){

		return (
			<div className="managePlayers">
				<button onClick={this.toggleManagePlayers}>Players</button>
				{ this.state.showManage ? this.renderPlayerManage() : null }
			</div>
		)
	}
}


export default ManagePlayers;