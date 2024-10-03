import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have this for styling

function Dashboard() {
  const location = useLocation();
  const { expirationDate } = location.state || { expirationDate: null };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isClosed, setIsClosed] = useState(false); // State to check if the account is closed

  useEffect(() => {
    if (expirationDate) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = expirationDate - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [expirationDate]);

  const handleCloseAccount = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleProceed = () => {
    setIsClosed(true); // Mark the account as closed
    setIsModalOpen(false); // Close modal
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Clear the countdown
  };

  return (
    <div className="dashboard-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Your account expires in:</h1>
      {/* Only show the timer if the account is not closed */}
      {!isClosed && (
        <h2>
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </h2>
      )}
      {isClosed && <h3 style={{ color: 'red' }}>Your account has been closed.</h3>}
      {!isClosed && (
        <div>
          <button className="close-account-button" onClick={handleCloseAccount}>Close Account</button>
          {/* Container for buttons to center align them */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}> {/* Increased marginTop for more space */}
            <button 
              className="collect-rewards-button" 
              disabled 
              style={{ padding: '15px 30px', fontSize: '1.2em', width: '200px' }} // Set a specific width for consistency
            >
              Collect Rewards
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Want to close account before expiration?</h3>
            <p>You would lose 10% of your holdings.</p>
            <div className="modal-buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleProceed}>Proceed</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
