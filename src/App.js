import React from 'react';
import Layout from './components/layout/Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/theme.css';
import './assets/css/index.css';
import RoutesFile from './routes/Routes';
function App() {
  return (
    <div className="App">
    {/* <Layout /> */}
    <RoutesFile />
    </div>
  );
}

export default App;
