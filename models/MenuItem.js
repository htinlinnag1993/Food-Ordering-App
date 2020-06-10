const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuItemSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 1,
            message: 'Name must be longer than 1 character'
        },
        required: [true, 'Name is requried.']
    },
    description: {
        type: String,
        validate: {
            validator: (description) => description.length > 2,
            message: 'Description must be longer than 2 characters'
        },
        required: [true, 'Description is requried.']
    },
    categoryInMenu: {
        type: String,
        validate: {
            validator: (categoryInMenu) => categoryInMenu.length > 1,
            message: 'Category in menu must be longer than 1 character'
        },
        required: [true, 'Category in menu is requried.']
    },
    _menuItemImg: {
        type: Schema.Types.ObjectId,
        ref: 'menu-item-imgs'
    },
    price: {
        type: Number,
        validate: {
            validator: (price) => price > 1,
            message: 'Price must be more than 1'
        },
        required: [true, 'Price is requried.']
    },
    lastUpdated: Date,
    createdOn: Date,
});

mongoose.model('menu-items', MenuItemSchema);

// https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg