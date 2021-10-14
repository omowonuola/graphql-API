// import {} from './types.js'

// import {} from '../models/User.js'

import { GraphQLString } from 'graphql'
import User from '../models/User.js'
import generateToken from '../utils/generateToken.js'

const register = {
    type: GraphQLString,
    args: {
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    async resolve(parent, args) {
        try {
            const { userName, email, password, displayName } = args
            const user = new User({ userName, email, password, displayName })

            await user.save()
            const token = generateToken(user)
            return token

        } catch (error) {
            return error
        }

    }
}

const login= {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        try {
          const user = await User.findOne({ email: args.email })

          if(!user || !user.matchPassword(args.password)) {
              throw new Error('Invalid credentials')
          }

          const token = generateToken(user)
          return token
        } catch (error) {
            return error
        }
         
    }
}

export {
    register,
    login
}