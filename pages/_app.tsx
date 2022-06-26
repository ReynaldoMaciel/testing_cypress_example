import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import type { AppProps } from 'next/app';
import Header from "../src/components/Header";
import '../src/styles/tailwind.css';
import '../src/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ToastContainer
          draggable
          closeOnClick
          hideProgressBar
          autoClose={1000}
        />
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
