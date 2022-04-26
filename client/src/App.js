import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.page'
import Chat from './pages/chat.page'
import Auth from './pages/auth.page'
import Appbar from './components/appbar.component'
import Footer from './components/footer.component'
function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
