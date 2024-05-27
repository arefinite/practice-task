import {
  Banner,
  Categories,
  Exclusive,
  HowToBuy,
  NewArrival,
  TopRated,
} from '@/components/home'

const Home = () => {
  return (
    <main className='py-8 center'>
      <Banner />
      <Categories />
      <Exclusive />
      <HowToBuy />
      <NewArrival />
      <TopRated />
    </main>
  )
}
export default Home
