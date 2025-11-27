import { Metadata } from 'next'

interface SEOProps {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
    noIndex?: boolean
}

export function constructMetadata({
    title,
    description,
    keywords = [],
    ogImage = '/images/og-default.jpg',
    noIndex = false,
}: SEOProps): Metadata {
    return {
        title: {
            default: title,
            template: `%s | German Edu Consultancy`,
        },
        description,
        keywords: [
            'Study in Germany',
            'Work in Germany',
            'Living in Germany',
            'German Visa',
            'German Universities',
            ...keywords,
        ],
        openGraph: {
            title,
            description,
            images: [
                {
                    url: ogImage,
                },
            ],
            type: 'website',
            locale: 'en_US',
            siteName: 'German Edu Consultancy',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    }
}
