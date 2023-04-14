import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContainerList from './components/ContainerList';
import ContainerDetails from './components/ContainerDetails';
import AdminLogin from './components/Admin/AdminLogin';
import './App.scss';

function App() {
  const [containers, setContainers] = useState([]);
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    fetchContainers();
  }, []);

  async function fetchContainers() {
    const response = await axios.get('/containers');
    setContainers(response.data);
  }

  function handleContainerClick(container) {
    setSelectedContainer(container);
  }

  function handleBackClick() {
    setSelectedContainer(null);
  }

  function handleShowAdmin() {
    setShowAdmin(true);
  }

  function handleHideAdmin() {
    setShowAdmin(false);
  }

  return (
    <div className="App">
      {showAdmin ? (
        <AdminLogin onBack={handleHideAdmin} />
      ) : selectedContainer ? (
        <ContainerDetails container={selectedContainer} onBack={handleBackClick} />
      ) : (
        <>
          <ContainerList containers={containers} onContainerClick={handleContainerClick} />
          <button onClick={handleShowAdmin}>Admin login</button>
        </>
      )}
    </div>
  );
}

export default App;