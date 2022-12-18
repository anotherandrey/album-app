import { Stack, Button, ButtonGroup, Box } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { imagesStore } from '../stores'

type PaginatorProps = {
  page: number
  setPage: (page: number) => void
}

const Paginator = observer(({ page, setPage }: PaginatorProps) => {
  const totalPages = imagesStore.totalPages - 1

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
        {[page + 1, 'of', totalPages + 1].map((item, key) => (
          <Box key={key} display={'inline'} mx={3}>
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
})

export { Paginator }
