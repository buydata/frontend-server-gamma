import ProductCatalog from '@/components/product/product-catalog';
import Head from 'next/head';

const CatalogPage = () => {
  return (
    <div>
      <Head>
        <title>Product Catalog</title>
        <meta name="description" content="Data product catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8">Список дата-продуктов</h1>
        <ProductCatalog />
      </main>
    </div>
  );
};

export default CatalogPage;