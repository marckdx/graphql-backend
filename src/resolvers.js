const User = require('./User');


module.exports = 
{
    Query:{
       users: () => User.find(),
       user: (_, { id }) => User.findById(id)
    },
    Mutation:{
        createUser: (_, { name, email }) => user.create({ name, email})
    }
};