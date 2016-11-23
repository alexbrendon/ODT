import React from 'react';
import Country from './Country';





class EventTable extends React.Component {
	render(){
		const event = this.props.events[this.props.id];
		if ( event.picked ) {
			return (
				<li className="eventName">{event.name}</li>
			)
		}

		return null;
	}
}



class PlayerColumn extends React.Component {
	render(){
		const player = this.props.player;

		if( player.picks ){
			return (
				<ul className="playerColumn">
					<li className="playerName">{player.name}</li>
					{ player.picks.map( (pick, i) => <li key={i}><Country country={pick.country} /></li> ) }
				</ul>
			)
		}

		return null;
	}
}

class CurrentPicks extends React.Component {
	render(){
		const eventKeys = Object.keys(this.props.events);
		const playerKeys = Object.keys(this.props.players);
		return (
			<div className="currentPicks">
				<ul className="events">{ eventKeys.map( (key) => <EventTable key={key} id={key} events={this.props.events} /> ) }</ul>
				{ playerKeys.map( (key) => <PlayerColumn key={key} id={key} player={this.props.players[key]} /> ) }
			</div>
		)
	}
}


export default CurrentPicks;