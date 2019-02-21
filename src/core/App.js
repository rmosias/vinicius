import React from "react"

import Routes from '../routes'

import Header from './Header/index'
import Footer from './Footer/index'

const App = () => (
	<div>
		<Header />
		<div className="container">
			<Routes />
		</div>
		<Footer />
	</div>
);

export default App