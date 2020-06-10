const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    email: String,
    address: {
        streetAddress: { type: String, default: '1234 Main Street'},
        city: { type: String, default: 'Flushing'},
        state: { type: String, default: 'NY'},
        zipcode: { type: String, default: '11368'}
    },
    credits: { type: Number, default: 5},
});

mongoose.model('users', userSchema);