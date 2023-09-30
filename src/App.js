import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import { Page } from './components/Page';
import { Container } from "@mui/material";
import Nav from "./components/navigation/Nav";

function App() {

    useEffect(() => {
        
    })

  return (
    <div className="App">
        <Nav />
        <Header />
        <Container fixed sx={{
            backgroundColor: '#fafafa',
            margin: '1% auto',
            padding: '3%',
            border: '1px solid rgba(0,0,0,0.1)'
        }}>
                <Routes>
                    <Route path="*" element={<Page number={1} />} />
                    <Route path="two" element={<Page number={2} />} />
                    <Route path="three" element={<Page number={3} />} />
                    <Route path="four" element={<Page number={4} />} />
                </Routes>
        </Container>
    </div>
  );
}

export default App;
