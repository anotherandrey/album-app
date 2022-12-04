import { Flex } from '@chakra-ui/react'
import { Paginator } from './Paginator'
import { SortDirectionRadio } from './SortDirectionRadio'

type DashboardSettingsProps = {
  page: number
  setPage: (page: number) => void
  sortDirection: SortDirection
  setSortDirection: (sortDirection: SortDirection) => void
}

const DashboardSettings = (props: DashboardSettingsProps) => {
  return (
    <Flex justifyContent={'center'} flexWrap={'nowrap'} gap={1}>
      <Paginator page={props.page} setPage={props.setPage} />
      <SortDirectionRadio
        sortDirection={props.sortDirection}
        setSortDirection={props.setSortDirection}
      />
    </Flex>
  )
}

export { DashboardSettings }
