import React from 'react';



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
					<p className="eventName">{event.name}</p>
					<p className="eventName">{event.picks.player.name}</p>
					<ul className="picks">
						{	
							event.picks.map( this.showPicks )
						}
					</ul>
				</div>
			)
		}
	}

	showPicks( pick, i ) {
		return (
			<li key={i}>
				<span className="country">{pick.country}</span>
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