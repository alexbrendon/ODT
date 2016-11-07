import React from  'react';
import { getFunName } from '../helpers';

class Home extends React.Component {

	goToStore( event ) {
		event.preventDefault();
		// const storeId = this.storeInput.value;
		// this.context.router.transitionTo(`/store/${storeId}`);
		this.context.router.transitionTo(`/main/`);
	}

	render(){
		return (
			<form action="" className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
				<h2>ODT</h2>
				<button type="submit">Enter -></button>
			</form>
		)
	}
}


Home.contextTypes = {
	router: React.PropTypes.object
}


export default Home;