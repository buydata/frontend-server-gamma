export async function getDataProduct(productId: string): Promise<Record<string, any>[]> {
    const res = await fetch(`http://localhost:7010/show_data_product/${productId}`);
    
    return res.json(); // возвращает распарсенные JSON-данные
}

export async function getProducts(productId: string): Promise<Record<string, any>[]> {
    const res = await fetch(`http://localhost:7010/catalog/products`);
    
    return res.json(); // возвращает распарсенные JSON-данные
}