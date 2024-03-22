// models/Data.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const dataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    doorNo: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

export default model('address', dataSchema);
