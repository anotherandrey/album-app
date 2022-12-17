import { useState, useEffect } from 'react'
import { Box, Image, Spinner } from '@chakra-ui/react'
import * as Api from '../openapi'

type ImageCardProps = {
  item: Api.ImageDto
}

const ImageCard = ({ item }: ImageCardProps) => {
  const [base64, setBase64] = useState<string>('')

  useEffect(() => {
    const api = new Api.ImagesBase64RestControllerApi()
    api
      .getBase64({ id: item.id })
      .then(base64 => setBase64(base64 ?? ''))
      .catch(error => console.error(error))
  }, [item])

  return (
    <Box
      border={'1px solid #e3e3e3'}
      borderRadius={'0.375rem'}
      overflow={'hidden'}
      h={'12.5rem'}
    >
      {!!base64 ? (
        <Image
          src={`data:${item.contentType};base64,${base64}`}
          alt={item.filename}
          h={'100%'}
        />
      ) : (
        <Placeholder />
      )}
    </Box>
  )
}

const Placeholder = () => {
  return (
    <Box textAlign={'center'} h={'12.5rem'}>
      <Spinner m={`${12.5 / 2 - 1.5 / 2}rem`} h={'1.5rem'} />
    </Box>
  )
}

export { ImageCard }
