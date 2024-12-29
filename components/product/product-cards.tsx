// components/ProductCard.tsx
"use client"
import React from 'react';

import { Product } from './types/product';
import { Badge } from '../ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const created_date = new Date(product.createdAt).toLocaleDateString()
  const handleAddToCart = () => {
    // Логика для добавления в корзину
    console.log(`Product ${product.id} added to cart`);
  };

  return (
    <Link href={`/catalog/product/${product.id}`} target="_blank" rel="noopener noreferrer">
      <Card className="w-full p-4 shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-200 relative">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
          <CardDescription className="text-gray-600">
            {product.category}
          </CardDescription>
        </CardHeader>

        <div className="my-4">
          <Badge className="bg-green-500 text-white">{product.status}</Badge>
          <p className="mt-2 text-sm">Partitions: {product.partitions || 'N/A'}</p>
          <p className="text-sm">Created: {created_date}</p>
        </div>

        <Button
          variant="apply"
          size="icon"
          onClick={(e) => {
            e.preventDefault(); // предотвращение открытия ссылки при нажатии
            handleAddToCart();
          }}
          className="absolute right-4 top-4"
        >
          <ShoppingCart className="h-4 w-6" />
        </Button>

        <CardFooter className="text-right">
          <p className="text-xs text-gray-500">Last updated: {new Date(product.updatedAt).toLocaleDateString()}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;