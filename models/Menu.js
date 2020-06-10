const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 1,
            message: 'Name must be longer than 1 character'
        },
        required: [true, 'Name is requried.']
    },
    menuItems: [{
        type: Schema.Types.ObjectId,
        ref: 'menu-items'
    }],
    lastUpdated: Date,
    createdOn: Date,
});

mongoose.model('menus', MenuSchema);