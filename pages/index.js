import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Is there a vaccine for Covid-19? - Yes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen bg-green-500 flex items-center justify-center">
        <h1 className="text-9xl text-center text-green-900">Yes</h1>
      </div>
    </div>
  )
}
