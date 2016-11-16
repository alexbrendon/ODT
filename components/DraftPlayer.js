import React from 'react';


class DraftPlayer extends React.Component {
	constructor(props){
		super(props);

		this.selectEvent = this.selectEvent.bind(this);
	}

	selectEvent() {
		console.log('click');

	}


	render(){

		return (
			<li onClick={this.selectEvent}>{this.props.player.name}</li>
		)
	}
}


export default DraftPlayer;