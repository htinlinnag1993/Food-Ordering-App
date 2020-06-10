import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'materialize-css';
import { Navbar, Icon, Dropdown, Divider, Row, Col } from 'react-materialize';

class TopNav extends Component {
    renderLoginStatus = () => {
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return (
                    <Link to="/auth/google" style={{ paddingLeft: '2px' }}>
                        <div className="center-align valign-wrapper">
                            <img width="45px"
                                alt="Google sign-in"  
                                src="/resources/img/Google_Official_Button.png" className="left" 
                            />
                            Sign in with Google
                        </div>
                    </Link>
                );
            default:
                return (
                    <div style={{ width: '200px' }}>
                        <Link to="/dashboard" className="black-text profile-dropdown-item">
                            <div className="center-align valign-wrapper">
                                <Icon className="material-icons left">dashboard</Icon>
                                {this.props.auth.displayName}
                            </div>
                        </Link>
                        <Link to="/profile" className="black-text profile-dropdown-item">
                            <div className="center-align valign-wrapper">
                                <Icon className="material-icons left">home</Icon>
                                {this.props.auth.address.streetAddress}
                            </div>
                        </Link>
                        <Divider />
                        <Link to="/api/logout" className="black-text profile-dropdown-item">
                            <div className="center-align valign-wrapper">
                                <Icon className="material-icons left">lock</Icon>
                                Logout
                            </div>
                        </Link>
                    </div>
                );
        }
    }

    render() {
        return (
            <Navbar
                alignLinks="right"
                brand={
                    <Link to="/" className="brand-logo black-text">
                        <i className="large material-icons">
                            restaurant
                        </i>
                    </Link>
                }
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon className="black-text">menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                className="yellow accent-4"
            >
                <Link to="/menu" className="black-text center-align">
                    <Icon center className="black-text">menu_book</Icon>
                </Link>
                <Dropdown
                    id="Profile_Dropdown"
                    options={{
                        alignment: 'left',
                        belowOrigin: true,
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: false,
                        container: null,
                        coverTrigger: false,
                        hover: false,
                        inDuration: 300,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 225
                    }}
                    trigger={
                        <Link to="#!">
                            <Icon center className="black-text">account_circle</Icon>
                        </Link>}
                >
                    {this.renderLoginStatus()}
                </Dropdown>
                <Dropdown
                    id="Basket_Dropdown"
                    options={{
                        alignment: 'left',
                        belowOrigin: true,
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: false,
                        container: null,
                        coverTrigger: false,
                        hover: false,
                        inDuration: 300,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 225
                    }}
                    trigger={
                        <Link to="#!">
                            <Row>
                                <Col l={6} m={6} s={6} style={{ padding: 0 }}>
                                    <Icon center className="black-text">
                                        shopping_basket
                                    </Icon>
                                </Col>
                                <Col l={6} m={6} s={6} style={{ padding: 0 }}>
                                    <span id="total-items-quantity-in-basket" className="black-text"> 
                                        {this.props.basket.totalItemsQuantity}
                                    </span>
                                </Col>
                            </Row>
                        </Link>
                    }
                >
                    <Link to="/basket" className="black-text">
                        SubTotal: ${this.props.basket.totalPrice}
                    </Link>
                </Dropdown>
            </Navbar>
        );
    }
}

function mapStateToProps({ auth, basket }) {
    return { auth, basket };
}

export default connect(mapStateToProps)(TopNav);