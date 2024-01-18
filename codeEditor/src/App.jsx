import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <Toaster
     position="top-right"
     />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/editor/:roomId' element={<EditorPage/>} ></Route> 
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
