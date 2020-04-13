import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h1>Landing</h1>;
const Header = () => <h1>Header</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/survey/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;