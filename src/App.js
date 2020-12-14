import React from "react"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import Content from "./UI-components/Content/Content"
import "./style/normalize.css"
import {Provider} from "react-redux";
import store from "./BLL-redux/store";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
   <BrowserRouter>
       <Provider store={store}>
           <Content/>
           <ToastContainer/>
       </Provider>
   </BrowserRouter>

  )
}

export default App
