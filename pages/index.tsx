import { Seo } from '@/components/common'
import { Hero } from '@/components/home/'
import { FeatureWork } from '@/components/home/feature-work'
import RecentPost from '@/components/home/recent-post'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
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
