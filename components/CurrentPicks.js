import React from 'react';
import Country from './Country';



class CurrentPicks extends React.Component {
	constructor(props){
		super(props);

		this.showTable = this.showTable.bind(this);
	}


	showTable( key ) {
		const event = this.props.events[key];

		if ( event.picks ) {
			return (
				<div key={key} className="eventTable">

					<ul className="picks">
						<li className="eventName">{event.name}</li>
						{
							event.picks.map( (pick, i) => <li key={i}><Country country={pick.country} /></li> )
						}
					</ul>
				</div>
			)
		}
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