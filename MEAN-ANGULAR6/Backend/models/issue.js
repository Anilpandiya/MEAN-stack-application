import mongoose from 'mongoose';

const schema = mongoose.Schema;

let Issue = new schema({
    title: {
        type: String
    },
    responsible: {
        type: String 
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Issue', Issue);