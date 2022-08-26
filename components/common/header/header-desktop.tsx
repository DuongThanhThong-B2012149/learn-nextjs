import { Box, Container, Link as MuiLink, Stack } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTE_LIST } from './routes'

type Props = {}

const HeaderDesktop = (props: Props) => {
  const { pathname } = useRouter()
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent="flex-end">
          {ROUTE_LIST.map((route: any, idx: number) => (
            <Link key={idx} href={route.path} passHref>
              <MuiLink
                className={pathname === route.path ? 'active' : ''}
                sx={{
                  mr: 2,
                  fontSize: '1.2rem',
                  fontWeight: 'medium',
                }}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default HeaderDesktop
