// Import required info from graphql

import {defaultTypeResolver, GraphQLObjectType, GraphQLSchema} from 'graphql'


// import queries
import {} from './queries.js'

// import mutations

import {} from './mutation.js'

// define QueryType

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: {},
})


// Define Mutation Type

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {},
})

const modules =  new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
})


export default modules
