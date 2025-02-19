export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      console.log('Form data:', { name, email, message });
  
      return res.status(200).json({ message: 'Message received' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  