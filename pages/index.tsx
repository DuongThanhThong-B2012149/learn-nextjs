import { Seo } from '@/components/commons/seo'
import { FeatureWork, Hero, RecentPost } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <Box className={styles.container}>
      <Seo
        data={{
          title: 'NextJs tutorials | Herocodedev',
          description: 'Learn NextJs step by step build website for beginers',
          url: 'https://learn-nextjs-eight-phi.vercel.app/',
          thumbnailUrl: 'https://learn-nextjs-eight-phi.vercel.app/',
        }}
      />
      <Hero />
      <RecentPost />
      <FeatureWork />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
