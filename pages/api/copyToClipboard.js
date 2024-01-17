export default (req, res) => {
  const currentUrl = `${req.headers.host}${req.url}`;
  res.status(200).json({ currentUrl });
};
