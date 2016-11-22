import React from 'react';


class DraftEvent extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		if( this.props.draft ){
			return (				
				<h2 className="eventName">{this.props.event.name}</h2>
			)
		}

		return null;
	}
}


export default DraftEvent;