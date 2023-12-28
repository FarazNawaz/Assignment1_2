// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import AddBookForm from './components/AddBookForm';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/books" element={<><BooksList /><AddBookForm /></>} />
        <Route path="/categories" element={<div>Categories Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
