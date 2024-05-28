import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Product } from '@/types/product';
import { useState } from 'react';

const categories = ['all', 'mobile', 'laptop', 'smartwatch', 'headphone', 'accessories'];

interface Props {
  products: Product[]; // Assuming products will always be an array of Product
}

const Categories = ({ products }: Props) => {
  const [selectCategory, setSelectCategory] = useState<string>('all');

  const showProducts = products && (selectCategory === 'all' ? products : products.filter(product => product.category === selectCategory));

  return (
    <section className='py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>Top Categories</h2>
        <ul className='flex gap-4 py-10 flex-wrap'>
          {categories.map(category => (
            <li
              key={category}
              onClick={() => setSelectCategory(category)}
              className={`border border-gray-200 rounded-md p-2 cursor-pointer ${selectCategory === category ? 'bg-gray-200' : ''}`}
            >
              {category.slice(0, 1).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {showProducts && showProducts.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <img
                src={product.imageUrl}
                alt={product.title}
                className='w-fit h-36 object-cover'
              />
              <CardTitle className='pt-4'>{product.title}</CardTitle>
              <CardDescription>
                <span>Category: {product.category}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-1'>
                <span>
                  Price: <strong>${product.price}</strong>
                </span>
                <span className='flex gap-1 items-center'>
                  Rating: <strong>{product.rating}</strong> <Star size={20} />
                </span>
                <span>
                  Stock : <strong>{product.stock}</strong>
                </span>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Categories;
