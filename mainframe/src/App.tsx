import React from 'react';
import './App.css';
import { NavbarComponent } from './components';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import { DigivoterRegistration, HomePage, ImageRecognition, LoginPage } from './pages';

const NavBottomLine = styled.div`
  width: 100%;
  height: 50px;
  background: #1976D240;
  color: #1976D2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <NavBottomLine>
        Bringing Democracy to your fingertips. <span style={{ fontWeight: 700, margin: '0 0 0 5px' }}>#Electhon'23</span>
      </NavBottomLine>
      <Routes>
        <Route path="/" element={
          <HomePage />
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<DigivoterRegistration />} />
        <Route path="/scanface/verification" element={<ImageRecognition />} />
      </Routes>
    </div>
  );
}

export default App;
