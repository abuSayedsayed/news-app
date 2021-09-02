import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

export class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <News key="hello" pageSize={25} country="in" category="general" />
                    </Route>
                    <Route exact path="/general">
                        <News
                            key={`${Math.random()}`}
                            pageSize={25}
                            country="in"
                            category="general"
                        />
                    </Route>
                    <Route exact path="/business">
                        <News key="business" pageSize={25} country="in" category="business" />
                    </Route>
                    <Route exact path="/entertainment">
                        <News
                            key="entertainment"
                            pageSize={25}
                            country="in"
                            category="entertainment"
                        />
                    </Route>
                    <Route exact path="/health">
                        <News key="health" pageSize={25} country="in" category="health" />
                    </Route>
                    <Route exact path="/science">
                        <News key="science" pageSize={25} country="in" category="science" />
                    </Route>
                    <Route exact path="/sports">
                        <News key="sports" pageSize={25} country="in" category="sports" />
                    </Route>
                    <Route exact path="/technology">
                        <News key="technology" pageSize={25} country="in" category="technology" />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
