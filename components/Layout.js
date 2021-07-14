import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={keywords}></meta>
      </Head>
      <Header />

      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ EVents | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music,dj,edm,events',
}
