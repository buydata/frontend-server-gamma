// types/product.ts
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  ownerId?: string;
  status: string;
  format: string;
  name: string;
  category: string;
  source: string;
  partitions?: number;
  createdAt: string;
  updatedAt: string;
}