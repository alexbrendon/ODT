import React from 'react';


class DraftCountry extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const country = this.props.country;
		return (
			<div className="draftCountry">
				<li onClick={() => this.props.pickCountry(country.name)}>{country.name}</li>
			</div>
		)
	}
}


export default DraftCountry;