import '../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { useRouter } from 'next/router'

const cache = new InMemoryCache

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(process.env.NEXT_PUBLIC_DEV_URL, process.env.NEXT_PUBLIC_PRO_URL)
  console.log(process.env.ENV_DEV_URL, process.env.ENV_PRO_URL)
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_DEV_URL}`,
    cache
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
