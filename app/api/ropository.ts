import { Product } from "@/components/product/types/product";

export async function getDataProduct(productId: string): Promise<Record<string, any>[]> {
    const res = await fetch(`http://localhost:7010/show_data_product/${productId}`);
    
    return res.json();
}

export async function getProducts(): Promise<Product[]>  {
    let res = await fetch(`http://localhost:7010/catalog/products`, { cache: 'no-store' });
    console.log("[getProducts]: ", res)

    return await res.json();
}