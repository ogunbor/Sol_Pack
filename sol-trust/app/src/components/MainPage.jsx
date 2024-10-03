import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import './MainPage.css';

  

function MainPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedDate) {
      const expirationDate = selectedDate.getTime(); 
      navigate('/dashboard', { state: { expirationDate } });
    } else {
      alert('Please select a date before submitting.');
    }
  };

  return (
    <div className="main-container">
       {/* Wallet Connect at the top left */}
            <div className="wallet-button-container">
                <WalletMultiButton />
            </div>
       

      <p className="header-text">The Better Way to Save & Invest</p>
      <p className="sub-header">
        <span className="highlight-text">SolTrust</span> helps over 5 million customers achieve their financial goals
        <br />
        by helping them save and invest their SOL with ease.
      </p>
      <div className="content-box">
        <div className="mb-4">
          <label>Select a Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date(new Date().setDate(new Date().getDate() + 30))}
            className="mt-1 block w-full px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label>Enter an amount</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2"
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default MainPage;
