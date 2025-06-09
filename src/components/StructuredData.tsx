import React from 'react';
import { 
    generateOrganizationSchema, 
    generateWebsiteSchema, 
    generateWebPageSchema,
    generateAboutPageSchema,
    generateContactPageSchema,
    generateServicePageSchema,
    generateProjectPageSchema
} from '@/utils/structuredData';

interface BasePageData {
    name: string;
    description: string;
    url: string;
}

interface ServicePageData extends BasePageData {
    image: string;
    breadcrumb: { name: string; item: string }[];
}

interface ProjectPageData extends BasePageData {
    image: string;
    breadcrumb: { name: string; item: string }[];
}

interface StructuredDataProps {
    type: 'Organization' | 'WebSite' | 'WebPage' | 'AboutPage' | 'ContactPage' | 'ServicePage' | 'ProjectPage';
    pageData?: BasePageData | ServicePageData | ProjectPageData;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, pageData }) => {
    const getStructuredData = () => {
        switch (type) {
            case 'Organization':
                return generateOrganizationSchema();
            case 'WebSite':
                return generateWebsiteSchema();
            case 'WebPage':
                if (!pageData) return null;
                return generateWebPageSchema(pageData);
            case 'AboutPage':
                if (!pageData) return null;
                return generateAboutPageSchema(pageData);
            case 'ContactPage':
                if (!pageData) return null;
                return generateContactPageSchema(pageData);
            case 'ServicePage':
                if (!pageData || !('image' in pageData) || !('breadcrumb' in pageData)) return null;
                return generateServicePageSchema(pageData as ServicePageData);
            case 'ProjectPage':
                if (!pageData || !('image' in pageData) || !('breadcrumb' in pageData)) return null;
                return generateProjectPageSchema(pageData as ProjectPageData);
            default:
                return null;
        }
    };

    const structuredData = getStructuredData();

    if (!structuredData) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};

export default StructuredData; 