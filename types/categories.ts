export type CategoryType = {
    id: number;
    categoryName: string;
    slug: string;
    mainImage: {
        id: number;
        documentId: string;
        name: string;
      url: string;  // Assuming the image has a URL for simplicity
    };
}