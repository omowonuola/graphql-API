// Import required info from graphql

import {defaultTypeResolver, GraphQLObjectType, GraphQLSchema} from 'graphql'


// import queries
import { users } from './queries.js'

// import mutations

import { register, login} from './mutation.js'

// define QueryType

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: { users },
})


// Define Mutation Type

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: { register, login },
})

const modules =  new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
})


export default modules
