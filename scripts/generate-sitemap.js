const fs = require("fs");
const path = require("path");

const SITE_URL = "https://kairoza.in";
const TODAY = new Date().toISOString().split("T")[0];

const pages = [
  { loc: "/", priority: "1.0", changefreq: "daily" },

  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  ...["website-development-kerala", "website-development-kasaragod", "web-application-development",
    "custom-software-development", "erp-development", "cms-development",
    "digital-marketing-kerala", "seo-services-kerala", "google-ads-management",
    "meta-ads-management"].map(slug => ({
    loc: `/services/${slug}`,
    priority: "0.8",
    changefreq: "monthly"
  })),

  { loc: "/portfolio", priority: "0.9", changefreq: "weekly" },
  ...["anjis-jewel", "kl-rentals", "sncms-college", "sncms-erp"].map(slug => ({
    loc: `/portfolio/${slug}`,
    priority: "0.8",
    changefreq: "monthly"
  })),

  { loc: "/blog", priority: "0.8", changefreq: "weekly" },
  ...["website-development", "seo", "digital-marketing", "web-applications",
    "business-growth", "kerala-business"].map(slug => ({
    loc: `/blog/category/${slug}`,
    priority: "0.5",
    changefreq: "weekly"
  })),

  ...["website-cost-kerala-2026", "small-business-website-kerala-2026",
    "business-website-vs-landing-page", "choose-website-development-company-kerala",
    "top-features-business-website", "redesign-website-without-losing-seo",
    "spa-vs-multi-page-website", "seo-small-business-kerala-guide",
    "local-seo-kerala-businesses", "google-business-profile-optimisation-2026",
    "how-long-seo-take-show-results", "technical-seo-checklist-audit",
    "core-web-vitals-guide-2026", "keyword-research-kerala-businesses",
    "google-ads-vs-meta-ads", "instagram-marketing-kerala-small-business",
    "profitable-google-ads-small-budget", "digital-marketing-kerala-restaurants",
    "facebook-ads-vs-instagram-ads", "generate-leads-whatsapp-business",
    "web-application-vs-website", "custom-vs-off-shelf-software",
    "build-mvp-startup-idea", "admin-panel-development-guide",
    "erp-software-small-business-india", "what-is-saas-platform-how-to-build",
    "booking-system-development-features", "get-business-listed-google-maps",
    "online-presence-checklist-kerala-business", "accept-online-payments-small-business",
    "build-brand-online-step-by-step", "whatsapp-integration-business-website",
    "generate-more-enquiries-service-business", "cost-not-having-website",
    "digital-transformation-kerala-small-business", "digital-marketing-trends-kerala-2026",
    "restaurants-kerala-digital-marketing", "jewellery-marketing-strategies-kerala",
    "educational-institutions-kerala-online-presence", "startup-ecosystem-kerala",
    "kasaragod-businesses-go-digital-2026", "restaurant-website-complete-guide",
    "clinic-website-design-features", "ecommerce-website-development-guide",
    "jewellery-website-design-online", "rental-business-website-features"].map(slug => ({
    loc: `/blog/${slug}`,
    priority: "0.6",
    changefreq: "monthly"
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

const dest = path.join(__dirname, "..", "public", "sitemap.xml");
fs.writeFileSync(dest, xml, "utf-8");
console.log(`Sitemap generated at ${dest}`);
console.log(`  ${pages.length} URLs included`);
