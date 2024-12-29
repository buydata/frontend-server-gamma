// components/ProductCatalog.tsx
import React from 'react';
import ProductCard from './product-cards';
import { getProducts } from '@/app/api/ropository';
import { Product } from './types/product';


const ProductCatalog: React.FC = async () => {
  const products = await getProducts();

  console.log("[PRODUCTS]", products)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCatalog;
