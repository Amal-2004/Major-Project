import Newsletter from '../Models/newsletterModel.js'

export const sendNewsletter = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newNewsletter = await Newsletter.create({ name, email, message })
    res.json({ success: true, newsletter: newNewsletter })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getAllNewsletter = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    const rev=newsletters.reverse()
    res.json({ rev })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
