var mongoose = require( 'mongoose' )

const userSchema = { email: String, amount: String }

const Users = mongoose.model( 'User', userSchema );

module.exports = Users