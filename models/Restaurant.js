const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 1,
            message: 'Name must be longer than 1 character'
        },
        required: [true, 'Name is requried.']
    },
    typeOfCuisine: {
        type: String,
        validate: {
            validator: (typeOfCuisine) => typeOfCuisine.length > 2,
            message: 'Type of cuisine must be longer than 2 characters'
        },
        required: [true, 'Type of cuisine is requried.']
    },
    ownerName: {
        type: String,
        validate: {
            validator: (ownerName) => ownerName.length > 1,
            message: 'Owner\'s name must be longer than 1 character'
        },
        required: [true, 'Owner\'s name is requried.']
    },
    // menuAdmin: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    menus: [{
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    }]
});

mongoose.model('restaurant', RestaurantSchema);