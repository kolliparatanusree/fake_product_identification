import React, { useState,useEffect } from 'react';
import supabase from '../utils/supabaseClient';

function Collobarate() {
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [userId, setUserId] = useState(null);

  // Fetch the authenticated user ID when the component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      } else {
        console.error('Error fetching user:', error);
      }
    };

    fetchUserId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('User not authenticated');
      return;
    }

    const { data, error } = await supabase
      .from('collaborators')
      .insert([
        { product_name: productName, brand_name: brandName, user_id: userId }
      ]);

    if (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data');
    } else {
      console.log('Data inserted:', data);
      // Reset form fields
      setProductName('');
      setBrandName('');
    }
  };

  return (
    <div>
      <div className="card" style={{ width: '550px', padding: '35px', justifyContent: 'center', marginLeft: '400px', marginTop: '38px' }}>
        <form onSubmit={handleSubmit}>
          <h2>Product Name</h2>
          <input
            type="text"
            placeholder="Enter type of product"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            style={{ borderRadius: '5px', border: '1px solid grey', height: '35px' }} size="50"
          /><br /><br />
          <h2>Brand Name</h2>
          <input
            type="text"
            placeholder="Enter brand name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
            style={{ borderRadius: '5px', border: '1px solid grey', height: '35px' }} size="50"
          /><br /><br />
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className='btn btn-dark btn-lg'>Submit</button>
          </div><br />
        </form>
      </div>
    </div>
  );
}

export default Collobarate;