import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './components/Card/Card';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import CardDetails from "./components/Card/CardDetails";
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import './App.css';

function App() {
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [fetchedData, updateFetchedData] = useState({ info: {}, results: [] });

  useEffect(() => {
    (async function () {
      const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
      try {
        const response = await fetch(api);
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [pageNumber, search]);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container mx-auto py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1 className="text-4xl font-bold mb-3 text-center">
                      Characters
                    </h1>
                    <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
                    {/* Pass the page prop to the Card component */}
                    <Card page="/" results={fetchedData.results} />

                    <Pagination
                      info={fetchedData.info}
                      pageNumber={pageNumber}
                      updatePageNumber={updatePageNumber}
                    />
                  </>
                }
              />
              {/* Add the dynamic placeholders for character IDs */}
              <Route path="/episodes/:id" element={<CardDetails />} />
              <Route path="/location/:id" element={<CardDetails />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/location" element={<Location />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
