// components/ProductModal.tsx
import React from 'react';
import { Button } from '../ui/button';
import { Product } from './types/product';

interface ProductModalProps {
  product: Product
  onClose: () => void;
  addToCart: (product: any) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, addToCart }) => {
  if (!product) return null;
  return (
    <div className="modal">
      <h2>{product.category}</h2>
      <p>{product.format}</p>
      <p>${product.id}</p>
      <Button onClick={() => addToCart(product)}>Добавить в корзину</Button>
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
};

export default ProductModal;