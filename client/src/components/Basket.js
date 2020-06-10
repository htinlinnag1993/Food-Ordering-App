import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Icon, Collection, CollectionItem, Switch } from 'react-materialize';

import { addOneToBasket, removeOneFromBasket } from '../actions';

class Basket extends Component {
    state = {
        wantDelivery: false
    };

    onWantDeliverySwitchChange = () => {
        this.setState({
            wantDelivery: !this.state.wantDelivery
        });

    }

    renderWantDelivery = () => {
        if (this.state.wantDelivery) return 10;
        else return 0;
    }

    addDeliveryFee = () => {
        if (this.state.wantDelivery) return 10;
        else return 0;
    }

    renderItemsInBasket = () => {
        const { addedItems, totalPrice } = this.props.basket;
        if (addedItems.length > 0) {
            return (
                <Row>
                    <Col
                        l={12}
                        m={12}
                        s={12}
                    >
                        <Collection>
                            { addedItems.map((item) => {
                                return (
                                    <CollectionItem className="avatar" key={item.itemId}>
                                        <Row>
                                            <Col l={6} m={6} s={12}>
                                                <img
                                                    alt=""
                                                    className="circle"
                                                    src={item.itemImg.url}
                                                />
                                                <span className="title">
                                                    {item.itemName}
                                                </span>
                                            </Col>
                                            <Col l={4} m={4} s={12}>
                                                <span className="title">
                                                    ${item.price} x {item.quantity}
                                                </span>
                                            </Col>
                                            <Col l={2} m={2} s={12}>
                                                <p className="right">
                                                    ${item.price * item.quantity}
                                                </p>
                                            </Col>
                                        </Row>
                                    </CollectionItem>
                                );
                            })}
                            <CollectionItem>
                                <Row>
                                    <Col l={10} m={10} s={12}>
                                        <span className="title right">
                                            Subtotal
                                        </span>
                                    </Col>
                                    <Col l={2} m={2} s={12}>
                                        <span className="title right">
                                            $ {totalPrice}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col l={10} m={10} s={12}>
                                        <span className="title right">
                                            <Switch
                                                id="Switch-11"
                                                offLabel="Pick Up"
                                                onChange={this.onWantDeliverySwitchChange}
                                                onLabel="Delivery"
                                                className="yellow accent-4"
                                            />
                                        </span>
                                    </Col>
                                    <Col l={2} m={2} s={12}>
                                        <span className="title right">
                                            ${this.renderWantDelivery()}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col l={10} m={10} s={12}>
                                        <span className="title right">
                                            Total
                                        </span>
                                    </Col>
                                    <Col l={2} m={2} s={12}>
                                        <span className="title right">
                                            $ {totalPrice + this.addDeliveryFee()}
                                        </span>
                                    </Col>
                                </Row>
                            </CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            );
        }
        return(
            <p>Your basket is empty.</p>
        );
    }

    render() {
        return (
            <Container>
                <h5 className="black-text">
                    Basket
                    <Icon center className="black-text">
                        shopping_basket
                    </Icon>
                </h5>
                <div>
                    {this.renderItemsInBasket()}
                </div>
            </Container>
        );
    }
}

function mapStateToProps({ auth, basket }) {
    return { auth, basket };
}

export default connect(
    mapStateToProps, 
    { addOneToBasket, removeOneFromBasket }
)(Basket);