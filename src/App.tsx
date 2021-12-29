import { BrowserRouter} from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import routes from "@/routers/router";
import { renderRoutes } from "react-router-config";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          {renderRoutes(routes)}
        </DefaultLayout>
      </BrowserRouter>

    </div>
  )
}
export default App
