import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Divider,  } from 'react-materialize';

import { fetchMenu } from '../../actions';
import MenuItem from './MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_id: '5edf34938754d3419cb32286', // hard-coded until MenuChoice component is setup
            preppedMenuItems: []
        };
    }
    
    componentDidMount() {
        this.props.fetchMenu(this.state.menu_id)
            .then(() => this.prepMenuItems());
        
    }

    prepMenuItems = () => {
        const { menuItems } = this.props.menu;
        let reverseIndex = [];

        // Categorizes menuItems & assign each of them with the category as a key
        menuItems.forEach(menuItem => {
            let category = menuItem.categoryInMenu;
            if (!reverseIndex[category]) {
                reverseIndex[category] = [];
                reverseIndex[category].push(menuItem);
            } else if (!reverseIndex[category].includes(menuItem)) {
                reverseIndex[category].push(menuItem);
            }
            
        });
        this.setState({
            preppedMenuItems: reverseIndex
        });
    }

    renderMenuItems= (preppedMenuItems) => {
        // Object.entries return 2D array with 
        // the key (in index 0 in each slot) & the value (in index 1 in each slot) of each object
        const temp = Object.entries(preppedMenuItems);
        let keyCount = 0;

        // Returns Sections & Items of the menu
        return temp.map((element) => {
            keyCount++;
            return (
                <div key={keyCount}>
                    <h5>{element[0]}</h5>
                    <Divider />
                    <Row>
                        {element[1].map((item) => {
                            return(
                                <MenuItem
                                    key={item._id}
                                    itemId={item._id}
                                    itemName={item.name}
                                    itemDescription={item.description}
                                    itemCategoryInMenu={item.categoryInMenu}
                                    itemImg={item._menuItemImg}
                                    price={item.price}
                                />
                            );
                        })}
                    </Row>
                </div>
            );
        })
    }

    render() {
        const { preppedMenuItems } = this.state;
        return(
            <div className="container">
                {this.renderMenuItems(preppedMenuItems)}
            </div>
        );
    }
}

function mapStateToProps({ auth, menu }) {
    return { auth, menu };
}

export default connect(
    mapStateToProps, 
    { fetchMenu }
)(Menu);