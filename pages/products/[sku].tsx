import { useLazyQuery, useQuery } from '@apollo/client';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductOverview from '../../src/components/ProductOverview'
import { QUERY_PRODUCT } from '../../src/graphql/product';

const Home: NextPage = () => {
  const router = useRouter()
  
  const [getProduct, { loading, error, data }] = useLazyQuery(QUERY_PRODUCT, {
    fetchPolicy: 'no-cache'
  });
  // if (!data.product) return <p>Product not found!</p>
  
  useEffect(() => {
    if (router.isReady) {
      getProduct({
        variables: {
          sku: router.query.sku
        }
      })
    }
  }, [getProduct, router.isReady, router.query.sku])

  if (loading || !data?.product) return <></>
  if (error) return <p>Error!</p>

  return (
    <div>
      <ProductOverview {...data?.product} />
    </div>
  )
}

export default Home
