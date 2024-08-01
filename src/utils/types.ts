export type Product = {
    productId: string;
    name: string;
    description: string;
    price: string;
    images: string[] | null;
    storeId: string;
    createdAt: Date;
    updatedAt: Date | null;
    inventory: number;
    category: string | null;
    subcategory: string | null;
    rating: number;
    tags: string[] | null;
}