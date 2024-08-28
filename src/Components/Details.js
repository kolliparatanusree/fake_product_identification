import React, { useEffect, useState, useRef } from 'react';
import supabase from '../utils/supabaseClient';
import ContextMenu from './ContextMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css';

function Details() {
  const [profiles, setProfiles] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const contextMenuRef = useRef(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      let { data, error } = await supabase
        .from('profiles')
        .select('*');

      if (error) {
        console.error('Error fetching profiles:', error);
        toast.error('Error fetching profiles');
      } else {
        setProfiles(data);
      }
    };

    fetchProfiles();

    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRightClick = (e, profile) => {
    e.preventDefault();
    setSelectedProfile(profile);
    setContextMenu({
      position: { x: e.pageX, y: e.pageY },
      options: [
        { label: 'Copy', onClick: () => handleCopy(profile) },
      ],
    });
  };

  const handleRowClick = (profile) => {
    setSelectedRow(profile.id);
  };

  const handleCopy = (profile) => {
    navigator.clipboard.writeText(JSON.stringify(profile));
    toast.success('Profile copied to clipboard');
    setContextMenu(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="details">
      <ToastContainer />
      <br></br>
      <h1 align='center'><i>Manufacturers Details</i></h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      {filteredProfiles.length === 0 ? (
        <div className="no-records" align='center'>Loading.....</div>
      ) : (
        <table className="profile-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created_at</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map(profile => (
              <tr 
                key={profile.id} 
                onContextMenu={(e) => handleRightClick(e, profile)} 
                onClick={() => handleRowClick(profile)}
                className={selectedRow === profile.id ? 'selected-row' : ''}
              >
                <td>{profile.id}</td>
                <td>{highlightText(profile.username, searchQuery)}</td>
                <td>{highlightText(profile.email, searchQuery)}</td>
                <td>{profile.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {contextMenu && (
        <ContextMenu
          position={contextMenu.position}
          options={contextMenu.options}
          onClose={() => setContextMenu(null)}
          ref={contextMenuRef}
        />
      )}
    </div>
  );
}

export default Details;
