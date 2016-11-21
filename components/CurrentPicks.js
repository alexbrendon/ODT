import React from 'react';
import Country from './Country';



class CurrentPicks extends React.Component {
	constructor(props){
		super(props);

		this.showTable = this.showTable.bind(this);
	}


	showTable( key ) {
		const event = this.props.events[key];

		if ( event.complete ) {
			return (
				<div key={key} className="eventTable">

					<ul className="picks">
						<li className="eventName">{event.name}</li>
						{
							event.picks.map( (pick, i) => <Country key={i} country={pick.country} /> )
						}
					</ul>
				</div>
			)
		}
	}

	showPicks( pick, i ) {
		return (
			<li key={i}>
				<img src={flag} width="30" /> {pick.country.ioc}
			</li>
		)
	}


	render(){

		const eventKeys = Object.keys(this.props.events);

		return (
			<div className="currentPicks">
				{ eventKeys.map( this.showTable ) }
			</div>
		)
	}
}


export default CurrentPicks;