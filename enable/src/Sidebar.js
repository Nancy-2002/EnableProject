import React from 'react';
import { useState } from 'react';
import Sidepanel from './Sidepanel';
import './sidebar.css';
import './App.css';
function Sidebar() {
  const [sidepanelOpen, setSidepanelOpen] = useState(false);

  const openSidepanel = () => {
    setSidepanelOpen(true);
  };

  const closeSidepanel = () => {
    setSidepanelOpen(false);
  };

  return (
    <div>
      <Sidepanel isOpen={sidepanelOpen} onClose={closeSidepanel} />
      <button className="openbtn" onClick={openSidepanel}>
        ☰ 
      </button>
    </div>
  );
}

export default Sidebar;