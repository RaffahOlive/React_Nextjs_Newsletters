import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home()
{
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <main className={ styles.contentContainer }>
        <section className={ styles.hero }>
          <span> 👋 Hey, hwelcome</span>
          <h1>news about the <span>React</span> world </h1>
          <p>
            Get acess to all the publications <br />
            <span>for R$9,90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>

  )
}
