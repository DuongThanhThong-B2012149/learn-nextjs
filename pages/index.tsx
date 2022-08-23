import { Hero } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <Box className={styles.container}>
      <Hero />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
