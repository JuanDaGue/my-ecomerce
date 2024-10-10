interface ImageFormat {
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
}

interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
}
export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    price: string;
    type: string;
    taste: string;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    images: Image[];
    localizations: any[];
    }

