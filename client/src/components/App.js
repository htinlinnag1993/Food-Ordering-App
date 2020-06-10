import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

import * as actions from '../actions';
import TopNav from './TopNav';
import Menu from './Menu/Menu';
import Landing from './Landing';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Basket from './Basket';

const OrderReview = () => {
    return(
        <div>OrderReview</div>
    );
};
const OrderConfirmation = () => {
    return(
        <div>OrderConfirmation</div>
    );
};

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <TopNav />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/basket" component={Basket} />
                        <Route exact path="/order-review" component={OrderReview} />
                        <Route exact path="/order-confirmation" component={OrderConfirmation} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
