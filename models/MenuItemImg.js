const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuItemImgSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 1,
            message: 'Name must be longer than 1 character'
        },
        required: [true, 'Name is requried.']
    },
    url: {
        type: String,
        validate: {
            validator: (url) => url.length > 1,
            message: 'URL must be longer than 1 character'
        },
        required: [true, 'URL is requried.']
    },
    lastUpdated: Date,
    createdOn: Date,
});

mongoose.model('menu-item-imgs', MenuItemImgSchema);