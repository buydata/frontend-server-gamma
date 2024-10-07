// components/ProductCatalog.tsx
import React from 'react';
import ProductCard from './product-cards';
import { generateProducts } from './types/product';


const ProductCatalog: React.FC = () => {
  const products = generateProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCatalog;
