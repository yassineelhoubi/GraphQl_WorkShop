import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from "graphql";
import userData from '../MOCK_DATA.json'
import UserType from './TypeDefs/UserType'
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return userData
            }
        }
    }
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    gender: args.gender
                });
                return args
            }
        }
    }
});


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
