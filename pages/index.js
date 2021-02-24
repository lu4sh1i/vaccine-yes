import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  >
      <Head>
        <title>🦠 Is there a vaccine for Covid-19? - Yes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen bg-green-500 flex items-center justify-center flex-col">
        <h1 className="text-9xl text-center text-green-900">Yes</h1>
        <footer className="grid justify-center pt-20 pb-5 absolute bottom-2">
            <p className="text-base text-green-900">
              Created by{" "}
              <a
                className="bg-green-800 hover:text-green-400 text-green-500 px-2 py-1 rounded-md"
                href="https://pavell.me"
                target="_blank"
                >
                Pavel Lupu
              </a>
            </p>
          </footer>
      </div>
    </div>
  )
}
