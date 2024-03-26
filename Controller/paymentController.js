import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});

const createPayment = async (req, res) => {
    const { productName, amount } = req.body;

    if (!productName || !amount) {
        return res.status(400).json({ error: 'Product name and amount are required' });
    }

    const options = {
        amount: amount * 100, // Razorpay accepts amount in paise
        currency: 'INR',
        receipt: `receipt_${productName.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`, // Unique receipt id based on product name
        notes: {
            productName
        }
    };

    try {
        const payment = await razorpay.orders.create(options);
        res.json(payment);
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'An error occurred while creating payment' });
    }
};

export default createPayment;
