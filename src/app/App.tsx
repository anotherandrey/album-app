import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AlbumPage } from './pages'

function App() {
  return (
    <ChakraProvider>
      <AlbumPage />
    </ChakraProvider>
  )
}

export default App
