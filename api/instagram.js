export default async function handler(req, res) {
  // 🔹 Thêm CORS header
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 🔹 Xử lý preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 🔹 Code API bình thường ở dưới
  res.status(200).json([
    {
      media_url: 'https://via.placeholder.com/400x400.png?text=Bling+Nails+Spa',
      permalink: 'https://www.instagram.com/blingnailsandspa.bossier',
      caption: 'Test Instagram API – Bling Nails & Spa',
    },
  ]);
}
