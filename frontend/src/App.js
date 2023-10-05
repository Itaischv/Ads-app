import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Page } from './components/Page';
import { Container } from "@mui/material";
import Nav from "./components/navigation/Nav";
import {useEffect} from "react";
import axios from 'axios';
import { pageLoadEvent, adViewedEvent } from './api/api'

function App() {

    useEffect(() => {
        if (document.readyState === 'complete') {
            pageLoadEvent().then(r => console.debug(r));
        } else {
            window.addEventListener('load', pageLoadEvent);
            return () => window.removeEventListener('load', pageLoadEvent);
        }
    }, [])

    useEffect(() => {
        adViewedEvent().then(res => res); // Ad viewed
    }, [])

  return (
    <div className="App">
        <Nav />
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
