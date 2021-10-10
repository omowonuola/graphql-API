import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
    },

    body: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
})


const Comment = mongoose.model('Comment', commentSchema)

export default Comment