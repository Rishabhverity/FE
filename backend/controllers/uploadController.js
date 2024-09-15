
const uploadFile= (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
  
    const fileUrl = `/uploads/${file.filename}`;
    res.json({ fileUrl });
}
  
module.exports = uploadFile;