export default async function handler(req, res) {
  // Test API trước – chưa gọi Instagram thật
  res.status(200).json([
    {
      media_url: 'https://via.placeholder.com/400x400.png?text=Bling+Nails+Spa',
      permalink: 'https://www.instagram.com/blingnailsandspa.bossier',
      caption: 'Test Instagram API – Bling Nails & Spa',
    },
  ]);
}
