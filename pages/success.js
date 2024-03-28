import Head from 'next/head'
import Link from 'next/link'


export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Message sent!</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <h1>Message Received!</h1>
        <p>Thank you for your message! Head back to the <Link href="/"><a>home page</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
