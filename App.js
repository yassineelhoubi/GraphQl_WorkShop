import express from 'express';
import bodyParser from "body-parser";
import userData from './MOCK_DATA.json'
import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import UserType from './Schemas/TypeDefs/UserType'
import schema from './Schemas'
const app = express();
app.use(bodyParser.json());

// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: () => ({
//         id: { type: GraphQLInt },
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         gender: { type: GraphQLString },

//     })
// })



// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         getAllUsers: {
//             type: new GraphQLList(UserType),
//             args: {
//                 id: { type: GraphQLInt }
//             },
//             resolve(parent, args) {
//                 return userData
//             }
//         }
//     }
// });
// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         createUser: {
//             type: UserType,
//             args: {
//                 firstName: { type: GraphQLString },
//                 lastName: { type: GraphQLString },
//                 email: { type: GraphQLString },
//                 gender: { type: GraphQLString },
//             },
//             resolve(parent, args) {
//                 userData.push({
//                     id: userData.length + 1,
//                     firstName: args.firstName,
//                     lastName: args.lastName,
//                     email: args.email,
//                     gender: args.gender
//                 });
//                 return args
//             }
//         }
//     }
// });



// const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log(`app is listening to port 5000`);
})