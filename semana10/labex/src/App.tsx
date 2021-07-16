import { Toaster } from 'react-hot-toast'
import { Routes } from './routes/routes'

export const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes />
    </>
  )
}