
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from './Admin.js';

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ adminId: admin._id, email: admin.email }, 'powertools', { expiresIn: '24h' });
    res.status(200).json({ message: 'Admin login successful', token });
  } catch (error) {
    console.error('Error during admin login:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
