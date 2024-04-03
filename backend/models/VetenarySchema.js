import mongoose from 'mongoose';

const vetenarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Example minimum password length
    },
    role: {
        type: String,
    },
    phone: {
        type: Number
    },
    photo: {
        type: String
    }
}, { timestamps: true });

// Compile the schema into a model
const Vetenary = mongoose.model('Vetenary', vetenarySchema);

export default Vetenary;
