import {
    Organization,
    WebSite,
    WebPage,
    BreadcrumbList,
    Service,
    Project,
    AboutPage,
    ContactPage,
    ServicePage,
    ProjectPage
} from '@/utils/types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.alogza.com';

export const generateOrganizationSchema = (): Organization => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Alogza',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: [
        'https://www.linkedin.com/company/alogza',
        'https://twitter.com/alogza',
        'https://www.facebook.com/alogza'
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+966-XX-XXXXXXX',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic']
    }
});

export const generateWebsiteSchema = (): WebSite => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alogza',
    url: baseUrl,
    potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
    }
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]): BreadcrumbList => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item
    }))
});

export const generateServiceSchema = (service: {
    name: string;
    description: string;
    image: string;
    url: string;
}): Service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    image: service.image,
    url: service.url,
    provider: {
        '@type': 'Organization',
        name: 'Alogza'
    }
});

export const generateProjectSchema = (project: {
    name: string;
    description: string;
    image: string;
    url: string;
}): Project => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
    }
});

export const generateWebPageSchema = (page: {
    name: string;
    description: string;
    url: string;
}): WebPage => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url
});

export const generateAboutPageSchema = (page: {
    name: string;
    description: string;
    url: string;
}): AboutPage => ({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: page.name,
    description: page.description,
    url: page.url,
    mainEntity: {
        '@type': 'Organization',
        name: 'Alogza',
        description: 'A cutting-edge tech startup offering professional web development, mobile app creation, AI solutions, and digital design services.'
    }
});

export const generateContactPageSchema = (page: {
    name: string;
    description: string;
    url: string;
}): ContactPage => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: page.name,
    description: page.description,
    url: page.url,
    mainEntity: {
        '@type': 'Organization',
        name: 'Alogza',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+966-XX-XXXXXXX',
            contactType: 'customer service',
            availableLanguage: ['English', 'Arabic']
        }
    }
});

export const generateServicePageSchema = (service: {
    name: string;
    description: string;
    image: string;
    url: string;
    breadcrumb: { name: string; item: string }[];
}): ServicePage => ({
    ...generateServiceSchema(service),
    breadcrumb: generateBreadcrumbSchema(service.breadcrumb)
});

export const generateProjectPageSchema = (project: {
    name: string;
    description: string;
    image: string;
    url: string;
    breadcrumb: { name: string; item: string }[];
}): ProjectPage => ({
    ...generateProjectSchema(project),
    breadcrumb: generateBreadcrumbSchema(project.breadcrumb)
}); 