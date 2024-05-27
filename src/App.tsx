import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/routes'
import { ThemeProvider } from './components/theme/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}
export default App
