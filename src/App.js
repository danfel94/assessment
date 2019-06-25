import React from 'react';
import Layout from './components/Layout/Layout';
import Example from './components/Example/Example';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Example />
      </Layout>
    </div>
  );
}

export default App;
