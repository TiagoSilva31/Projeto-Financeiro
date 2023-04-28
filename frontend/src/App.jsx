import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import "bootstrap/dist/css/bootstrap.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App