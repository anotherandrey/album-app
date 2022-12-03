import { Stack, Button, ButtonGroup, Box } from '@chakra-ui/react'

type PaginatorProps = {
  page: number
  setPage: (page: number) => void
  totalPages: number
}

const Paginator = ({ page, setPage, totalPages }: PaginatorProps) => {
  const handleOnClick = (n: number) => {
    const nextPage = page + n
    if (nextPage >= 0 && nextPage <= totalPages) {
      setPage(nextPage)
    }
  }

  return (
    <Stack direction={'row'} alignItems={'center'}>
      <ButtonGroup variant={'outline'} isAttached>
        <Button onClick={() => handleOnClick(-2)}>{'<<'}</Button>
        <Button onClick={() => handleOnClick(-1)}>{'<'}</Button>
      </ButtonGroup>
      <Box display={'inline'}>
        {[page, 'of', totalPages].map(item => (
          <Box display={'inline'} mx={3}>
            {item}
          </Box>
        ))}
      </Box>
      <ButtonGroup variant={'outline'} isAttached>
        <Button onClick={() => handleOnClick(1)}>{'>'}</Button>
        <Button onClick={() => handleOnClick(2)}>{'>>'}</Button>
      </ButtonGroup>
    </Stack>
  )
}

export { Paginator }
