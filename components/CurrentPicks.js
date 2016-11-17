import React from 'react';



class CurrentPicks extends React.Component {
	constructor(props){
		super(props);

		this.showTable = this.showTable.bind(this);
	}

	
	showTable( key ) {
		const event = this.props.events[key];

		if ( event.complete ) {
			console.log(event);
			return (
				<div key={key} className="eventTable">
					<p>{event.name}</p>
					<ul className="picks">
						{	
							event.picks.map( (pick, i) => <li key={i}>{pick.country}</li> )
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