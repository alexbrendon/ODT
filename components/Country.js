import React from 'react';


class Country extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const country = this.props.country;
		const flag = "../img/countries/" + country.ioc + ".png";
		return (
				<div className="countryItem">
					<img src={flag} width="30" /> 
					<p>{country.ioc}</p>
				</div>
		)
	}
}


export default Country;