const mongoose = require('mongoose')
    schema = mongoose.Schema

const JobsSchema = new schema({
    company: {
        type: String,
        required:[true, 'please provide company name'],
        maxlength: 50
    },
    position: {
        type: String,
        required: [true, 'please provide position'],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide a user']
    }
    
}, { timestamps: true })

module.exports = mongoose.model('Job', JobsSchema)