import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'
import User from '../models/User.js'
import Post from '../models/Post.js'
import Comment from '../models/Comment.js'


const UserType = new GraphQLObjectType({
    name: "User",
    description: "User type",
    fields: () => ({
        id: { type: GraphQLID },
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
    }),
})


const PostType = new GraphQLObjectType({
    name: "Post",
    description: "Post type",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { 
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.authorId)
            }, 
        },
        comments: { 
            type: GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({ postId: parent.id })
            }, 
        },
    }),
})

const commentType = new GraphQLObjectType({
    name: "Comment",
    description: "Comment type",
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId)
            },
        },
        post: {
            type: PostType,
            resolve(parent, args) {
                return Post.findById(parent.postId)
            },
        },
    })
})

export {
    UserType,
    PostType,
    commentType
}