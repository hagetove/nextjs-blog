import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
  <Layout>
	  <Head>
        <title>Overview</title>
      </Head>
      <h1>What is this</h1>
	<p>This is simply a demonstration webpage designed for integration with Webview. This is one of the fastest and simplest ways to make an app. </p>
      <h2>
        <Link href="/">
          <a>Take me home</a>
        </Link>
      </h2>
	</Layout>
  )
}
