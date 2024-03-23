
import Address from '../Models/addressModel.js';

export const getAllData = async (req, res) => {
    try {
        const allData = await Data.find();
        res.json(allData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createData = async (req, res) => {
    const data = new Address(req.body);
    try {
        const newData = await data.save();
        res.status(201).json(newData);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
};
export default Address

