import {
  Banner,
  Categories,
  Exclusive,
  HowToBuy,
  NewArrival,
  TopRated,
} from '@/components/home'
import Loader from '@/components/Loader'
import { useGetAllProducts } from '@/services/queries'
import { Product } from '@/types/product'

const Home = () => {
  const {
    data: products,
    isPending: isProductsPending,
    isError: isProductsError,
  } = useGetAllProducts()

  const hasProduct = products && products.length > 0

  const discountedProduct =
    hasProduct &&
    products
      .filter(product => product.discount && product.discount <= 50)
      .sort((a: Product, b: Product) => (b?.discount || 0) - (a?.discount || 0))
      .slice(0, 10)

  const newArrival = hasProduct && products.reverse().slice(0, 10)

  const topRated =
    hasProduct &&
    products
      .sort((a: Product, b: Product) => (b?.rating || 0) - (a?.rating || 0))
      .slice(0, 10)

  if (isProductsPending) return <Loader />
  if (isProductsError) return <p>Something went wrong!</p>

  return (
    <main className='py-8 center'>
      <Banner />
      <Categories products={products} />
      {/* Pass discounted products as props */}
      <Exclusive discountedProducts={discountedProduct} />
      <HowToBuy />
      <NewArrival newArrival={newArrival} />
      <TopRated topRated={topRated} />
    </main>
  )
}

export default Home
