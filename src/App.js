import './MyComponent.css';
import React from 'react';

//https://returnqueen.com/?ref=landingfolio this page i used

export default function App() {
  return (
    <main>
      <section>
        <div className="leftSide">
          <img
            src="https://returnqueen.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.6d8fb5a2.png&w=1920&q=75"
            alt="pic"
            className="mapPicture"
          />
        </div>
        <div className="rightSide">
          <img
            src="https://returnqueen.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9b0d6970.png&w=1920&q=75"
            alt="logo"
            className="logo"
          />
          <h1 className="header">Welcome to ReturnQueen!</h1>
          <p className="subHeader">Let us know where you’re returning from!</p>
          <p className="message">
            Enter your zip code so we can create a custom ReturnQueen experience
            just for you!
          </p>
          <div className="zipFolder">
            <img
              src="https://returnqueen.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrop_pin.3869e3ba.png&w=96&q=75"
              alt="img1"
              className="zipCode"
            />

            <input
              className="zipCodeSearch"
              // eslint-disable-next-line upleveled/no-unnecessary-html-attributes
              type="text"
              maxLength="5"
              placeholder="Enter your zip code"
              required
            />
            <button className="button" type="button">
              ➱
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
