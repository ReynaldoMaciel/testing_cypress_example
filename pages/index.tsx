import type { NextPage } from 'next'
import ProductOverview from '../src/components/ProductOverview'
import styles from '../src/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProductOverview />
    </div>
  )
}

export default Home
