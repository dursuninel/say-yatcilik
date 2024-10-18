const axios = require("axios");
const fs = require("fs");

// Statik sayfalar
const staticPages = [
  { url: "/", priority: 1.0 },
  { url: "/about-us", priority: 0.8 },
  { url: "/yachts", priority: 0.8 },
  { url: "/news", priority: 0.8 },
  { url: "/discover", priority: 0.8 },
  { url: "/contact-us", priority: 0.8 },
];

// API'den dinamik veriler alınıyor
const getDynamicPages = async () => {
  const blogs = [];
  const news = [];
  const yachts = [];

  return [
    ...blogs.data.map((blog) => ({ url: `/blog/${blog.link}`, priority: 0.7 })),
    ...news.data.map((newsItem) => ({
      url: `/news/${newsItem.link}`,
      priority: 0.7,
    })),
    ...yachts.data.map((yacht) => ({
      url: `/yachts/${yacht.link}`,
      priority: 0.7,
    })),
  ];
};

// Sitemap oluşturma
const generateSitemap = async () => {
  //   const dynamicPages = await getDynamicPages();

  const allPages = [...staticPages];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  allPages.forEach((page) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://www.sayyachting.com${page.url}</loc>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += "</urlset>";

  fs.writeFileSync("sitemap.xml", sitemap);
};

// Sitemap'i oluşturuyoruz
generateSitemap()
  .then(() => {
    console.log("Sitemap oluşturuldu.");
  })
  .catch((err) => {
    console.error("Sitemap oluşturulurken hata oluştu:", err);
  });
