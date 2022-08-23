import { Box, Button, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import avatar from '@/images/avatar.jpg'
type Props = {}

export const Hero = (props: Props) => {
  return (
    <Box component="section" pt={{ xs: 9, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={8}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Box>
            <Typography
              variant="h3"
              component={'h1'}
              fontWeight="bold"
              mb={5}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Hi, I am John <br />I am the product management{' '}
            </Typography>
            <Typography mb={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet perspiciatis vitae
              incidunt. Aspernatur eaque iure architecto inventore corporis enim, in cum excepturi
              ad aperiam, nisi officia tenetur distinctio non.
            </Typography>
            <Button variant="contained" size="large">
              Dowload Resume
            </Button>
          </Box>
          <Box
            minWidth={'240px'}
            sx={{
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image
              style={{
                borderRadius: '50%',
              }}
              src={avatar}
              layout="responsive"
              alt="avatar"
            ></Image>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
