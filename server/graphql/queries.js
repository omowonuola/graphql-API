import {GraphQLList} from 'graphql'
import User from '../models/User.js'

import { UserType } from './types.js'
// import {} from './queries'


const users = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        return User.find()
    }
}

export {
    users
}

