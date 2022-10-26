import { Route, Routes } from "react-router-dom";
import BookList from "../Pages/BookList/BookList";
import BookView from "../Pages/BookView/BookView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookView />} />
      </Routes>
    </>
  );
}

export default App;
