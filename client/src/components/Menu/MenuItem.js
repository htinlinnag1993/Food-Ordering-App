import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addOneToBasket, removeOneFromBasket } from '../../actions';
import { Col, Card, Icon, CardTitle, Button, Badge, Row} from 'react-materialize';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        const { itemId, basket } = this.props;
        const addedItems = basket.addedItems;

        // Finds the current item in the basket to render the quantity on the current item component
        // If found, set the current item quantity to the quantity
        // If not found, set it to zero
        let existingItem = addedItems.find(item => item.itemId === itemId); 
        if (existingItem)
            this.state = {
                quantity: existingItem.quantity
            };
        else 
            this.state = {
                quantity: 0
            };
    }

    onAddItem = (item) => {
        this.setState({ quantity: this.state.quantity + 1 });
        this.props.addOneToBasket(item);
    }
    onRemoveItem = (item) => {
        if (this.state.quantity > 0) {
            this.setState({ quantity: this.state.quantity - 1 });
            this.props.removeOneFromBasket(item);
        }
    }

    render() {
        const { itemId, itemName, itemDescription, itemCategoryInMenu, itemImg, price } = this.props;
        const item = {
            itemId, itemName, itemDescription, itemCategoryInMenu, itemImg, price
        };
        return (
            <Col l={4} m={6} s={12}>
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={itemImg.url} reveal waves="light" />}
                    reveal={<p> {itemDescription} </p>}
                    revealIcon={<Icon>more_vert</Icon>}
                    title={itemName}
                >
                    <Row style={{ marginBottom: 0 }}>
                        <Col l={5} m={5} s={5} style={{ padding: '10px 0px 0px' }}>
                            <Badge className="left black white-text">${price} for 1</Badge>
                        </Col>
                        <Col l={3} m={3} s={3} style={{ padding: '10px 0px 0px' }}>
                            <Badge className="right">{this.state.quantity}x</Badge>
                        </Col>
                        <Col l={2} m={2} s={2} style={{ padding: 0 }}>
                            <Button
                                small
                                icon={<Icon>add</Icon>}
                                node="button"
                                waves="light"
                                className="right yellow black-text"
                                style={{ padding: '0px 8px 0px 8px', borderRadius: '50%' }}
                                onClick={() => {
                                    this.onAddItem(item);
                                }}
                            />
                        </Col>
                        <Col l={2} m={2} s={2} style={{ padding: 0 }}>
                            <Button
                                small
                                icon={<Icon>remove</Icon>}
                                node="button"
                                waves="light"
                                className="right yellow black-text"
                                style={{ padding: '0px 8px 0px 8px', borderRadius: '50%' }}
                                onClick={() => {
                                    this.onRemoveItem(item);
                                }}
                            />
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}

function mapStateToProps({ basket }) {
    return { basket };
}

export default connect(
    mapStateToProps, 
    { addOneToBasket, removeOneFromBasket }
)(MenuItem);