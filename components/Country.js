import React from 'react';


class Country extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const country = this.props.country;
		const flag = "../img/countries/" + country.ioc + ".png";
		return (
				<span><img src={flag} width="30" /> {country.ioc}</span>
		)
	}
}


export default Country;