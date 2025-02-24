import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importiamo le pagine
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import ContactsPage from './pages/ContactsPage';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;