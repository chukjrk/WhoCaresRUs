import React from 'react';

function Home() {
  return (
    <div className='homeContainer'>
      <div className="grayContainer">
        <div className="jumbo">
          <h1 className="jumboTitle">Hi User!</h1>
          <div className="jumboDesc">
            <p>Color really isn't that difficult to get right, if you know where to start.<br/>
            Learn by doing and you'll be a master in no time.</p>
          </div>
        </div>
      </div>
      <div className="displayCard">
        <div className='card'>
          <div className='container'>
            <img className="cardImg" src={require('../../Assets/images/pane-1-icon.png')} alt="Blue Icon" />
            <h6 className="cardSubHeader">Blue</h6>
            <div className ="card-body">
              <p>Blue is the color of the sky and sea. It is often associated with depth and stability.
              It symbolizes trust, loyalty, wisdom, confidence, and intelligence, faith, 
              truth, and heaven.</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='container'>
            <img className="cardImg" src={require('../../Assets/images/pane-2-icon.png')} alt="Green" />
            <h6 className="cardSubHeader">Green</h6>
            <div className="card-body">
              <p>Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. 
              Green has a strong emotional correspondence with safety.</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='container'>
            <img className="cardImg" src={require('../../Assets/images/pane-3-icon.png')} alt="Red" />
            <h6 className = "cardSubHeader">Red</h6>
            <div className="card-body">
              <p>Red is the color of fire and blood, so it is associated with energy, war, danger,
               strength, power, determination as well as passion desire and love.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
