import { RadioGroup, Stack, Box, Radio } from '@chakra-ui/react'

type SortDirectionRadioProps = {
  sortDirection: SortDirection
  setSortDirection: (SortDirection: SortDirection) => void
}

const SortDirectionRadio = ({
  sortDirection,
  setSortDirection,
}: SortDirectionRadioProps) => {
  const handleOnChange = (value: string) => {
    setSortDirection(value as SortDirection)
  }

  return (
    <RadioGroup onChange={value => handleOnChange(value)} value={sortDirection}>
      <Stack direction={'row'} alignItems={'center'}>
        {['asc', 'desc'].map(value => (
          <Box mx={3}>
            <Radio value={value}>{value}</Radio>
          </Box>
        ))}
      </Stack>
    </RadioGroup>
  )
}

export { SortDirectionRadio }
