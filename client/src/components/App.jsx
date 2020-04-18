import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import *  as actions from '../actions';

const Landing = () => <h1>Landing</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;

const App = props => {

  React.useEffect(() => {
    props.fetchUser();
  })

	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route path="/survey/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);
