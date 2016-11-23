import React from 'react';
import classNames from 'classnames';


class DraftEvent extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const classes = classNames({
			'eventName': true,
			'animate': this.props.draft
		});
		if( this.props.draft ){
			return (				
				<h2 className={classes}>{this.props.event.name}</h2>
			)
		}

		return null;
	}
}


export default DraftEvent;