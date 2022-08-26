import { Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import avatar from '@/images/avatar.jpg'
import Image from 'next/image'
type Props = {}

export const Hero = (props: Props) => {
  return (
    <Box pt={{ xs: 4, md: 18 }} pb={{ xs: 4, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          gap={4}
        >
          <Box>
            <Typography component="h1" variant="h3" mb={{ xs: 2, md: 5 }}>
              Hi, I am John <br />
              Creative Teachnologist{' '}
            </Typography>
            <Typography mb={{ xs: 2, md: 5 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur tempora
              autem sunt accusantium, porro nostrum molestiae odit sed placeat reiciendis quia
              nesciunt! Ipsa quia optio eius architecto, perspiciatis ipsum?
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Download Resume
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
