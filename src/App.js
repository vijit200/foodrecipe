import React from "react";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SearchResult from "./components/SearchResult";
import Home from "./components/Home";




function App() {

    
  return (
    <AppContext>
      
      <BrowserRouter>

        <div className="flex flex-col h-full">
          
            <Header/>

            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/searchResult/:searchQuery" exact element={<SearchResult/>}/>
              
            </Routes>

        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
