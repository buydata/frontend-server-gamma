// types/product.ts
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  ownerId?: string;
  status: string;
  typeFormat: string;
  category: string;
  partitions?: number;
  createdAt: string;
  updatedAt: string;
}

// Функция для генерации моковых данных продуктов
export const generateProducts = (): Product[] => [
  {
    id: '8e786818-0771-46fb-b69a-d45a05dc6a52',
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    status: 'Unavailable',
    typeFormat: 'CSV',
    category: 'Reports',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    ownerId: uuidv4(),
    status: 'Доступен',
    typeFormat: 'JSON',
    category: 'Данные с сайта ЦБ',
    partitions: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];
