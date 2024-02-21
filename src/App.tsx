import { Header } from './components/header'
import { StyledComponetsGlobalTheme } from './global/theme.global'
import { RoutesMapping } from './routes'

function App() {

  return (
    <>
      <StyledComponetsGlobalTheme />
      <Header />
      <RoutesMapping />
    </>
  )
}

export default App
