export type CategoryProduct = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    price: string;
    type: string;
    taste: string;
    isFeatured: boolean | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    images: Array<{
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string | null;
            width: number;
            height: number;
            size: number;
            sizeInBytes: number;
            url: string;
            };
            small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string | null;
            width: number;
            height: number;
            size: number;
            sizeInBytes: number;
            url: string;
            };
            medium: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string | null;
            width: number;
            height: number;
            size: number;
            sizeInBytes: number;
            url: string;
            };
            large: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string | null;
            width: number;
            height: number;
            size: number;
            sizeInBytes: number;
            url: string;
            };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string | null;
        }>;
        category: {
        id: number;
        documentId: string;
        categoryName: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string | null;
        };
        localizations: Array<any>;
    };