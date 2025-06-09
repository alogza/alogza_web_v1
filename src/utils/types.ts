export interface Organization {
    '@context': string;
    '@type': 'Organization';
    name: string;
    url: string;
    logo: string;
    sameAs: string[];
    contactPoint: {
        '@type': 'ContactPoint';
        telephone: string;
        contactType: string;
        availableLanguage: string[];
    };
}

export interface WebSite {
    '@context': string;
    '@type': 'WebSite';
    name: string;
    url: string;
    potentialAction: {
        '@type': 'SearchAction';
        target: string;
        'query-input': string;
    };
}

export interface WebPage {
    '@context': string;
    '@type': 'WebPage';
    name: string;
    description: string;
    url: string;
}

export interface BreadcrumbList {
    '@context': string;
    '@type': 'BreadcrumbList';
    itemListElement: {
        '@type': 'ListItem';
        position: number;
        name: string;
        item: string;
    }[];
}

export interface Service {
    '@context': string;
    '@type': 'Service';
    name: string;
    description: string;
    image: string;
    url: string;
    provider: {
        '@type': 'Organization';
        name: string;
    };
}

export interface Project {
    '@context': string;
    '@type': 'SoftwareApplication';
    name: string;
    description: string;
    image: string;
    url: string;
    applicationCategory: string;
    operatingSystem: string;
    offers: {
        '@type': 'Offer';
        price: string;
        priceCurrency: string;
    };
}

export interface AboutPage {
    '@context': string;
    '@type': 'AboutPage';
    name: string;
    description: string;
    url: string;
    mainEntity: {
        '@type': 'Organization';
        name: string;
        description: string;
    };
}

export interface ContactPage {
    '@context': string;
    '@type': 'ContactPage';
    name: string;
    description: string;
    url: string;
    mainEntity: {
        '@type': 'Organization';
        name: string;
        contactPoint: {
            '@type': 'ContactPoint';
            telephone: string;
            contactType: string;
            availableLanguage: string[];
        };
    };
}

export interface ServicePage extends Service {
    breadcrumb: BreadcrumbList;
}

export interface ProjectPage extends Project {
    breadcrumb: BreadcrumbList;
} 