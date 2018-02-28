import React, { createContext } from "react";
const Context = createContext();
const { Consumer, Provider } = Context;

module.exports = {
	Consumer, 
	Provider,
	withConsumer
};

function withConsumer(Component) {
	return (props) => <Consumer>
		{(context) => <Component {...Object.assign({}, context, props) } /> }
	</Consumer>
}
