import React from 'react';
import ReactDOM from 'react-dom';
import ReactWheel from '../src/components/wheel/index';
import Nav from './nav'
const App = () => {
	const names = ['pizza','napkin','bucket','pen','usb','laundry mat']
	const colors = ['red'].concat(['green','blue','yellow','orange','purple','rose'].sort(() => Math.random() - 0.5));
	console.log(colors,'c')
	const segments = names.map(x => ({name:x, color:colors[names.indexOf(x)]}))

	
	let wheel;

	const onSpinClick = () => {
		wheel.spinWheel();
	};
	const onSpinComplete = ( result ) => {
		console.log( 'spin complete', result );
	};

	return (
		<div>
			<Nav />
			<button style={{
				  'color': 'white',
				  'padding': '15px 32px',
				  'textAlign': 'center',
				  'textDecoration': 'none',
				  'display': "inline-block",
				  'fontSize': '16px',
				  'cursor': 'pointer',
				  'backgroundColor': '#f44336',
				  'border': 'none',
				  'margin': '20px 20px 20px 200px',
				  'fontWeight':'bold'

			}}onClick={onSpinClick}>
				Spin
			</button>
			<ReactWheel style={{
				'width':'500px'
			}}
				segments={segments}
				onComplete={onSpinComplete}
				ref={( wheelRef ) => {
					wheel = wheelRef;
				}}
			/>
			
		</div>
	);
};

const init = () => {
	const appRoot = document.createElement( 'div' );
	document.body.appendChild( appRoot );

	ReactDOM.render(
		<App/>,
		appRoot
	)
};

init();
