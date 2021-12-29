import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import DefaultLayout from "@/layouts/DefaultLayout";
import routes from "@/routers/router";

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
