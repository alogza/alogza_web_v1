import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.alogza.com';

    // Define supported locales
    const locales = ['en', 'ar']; // Add or modify based on your supported languages

    // Define all routes including subpages
    const routes = [
        '',           // Home page
        '/aboutus',   // About Us page
        '/services',  // Services main page
        '/services/website',    // Website Development
        '/services/mobileapp',  // Mobile App Development
        '/services/itconsultancy', // IT Consultancy
        '/services/game',      // Game Development
        '/services/design',    // Design Services
        '/services/ai',        // AI Services
        '/projects',  // Projects main page
        '/projects/salesmobile',    // SFA Mobile App
        '/projects/chatbot',        // AI Chatbot
        '/projects/bussinesweb',    // Isianpadu Business Web
        '/projects/productweb',     // SFA Web
        '/projects/certificate',    // Certificate App
        '/projects/amazeventure',   // Amaze Venture Game
        '/contact',   // Contact page
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Generate entries for each route and locale
    for (const locale of locales) {
        for (const route of routes) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: route === '' ? 1 : route.includes('/projects/') || route.includes('/services/') ? 0.7 : 0.8,
            });
        }
    }

    return sitemapEntries;
}