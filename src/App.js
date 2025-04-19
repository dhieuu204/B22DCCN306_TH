import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserPhotos from './components/UserPhotos';
import { Grid } from '@mui/material';

function App() {
  return (
    <Router>
      <TopBar />
      <Grid container>
        <Grid item xs={3}>
          <UserList />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/photos/:userId" element={<UserPhotos />} />
            <Route path="/users" element={<div>Chọn người dùng để xem chi tiết</div>} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;