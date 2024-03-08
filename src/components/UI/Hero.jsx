import React from "react";
import SuggestedBooks from "../Products/SuggestedBooks";

export default function Hero() {
  return (
    <div>
      <div
        className='hero'
        style={{
          marginTop: "7%",
          backgroundColor: "#f9f6ed",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className='hero-text'>
          <h1>Discover Endless Stories</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            suscipit, eius aspernatur soluta a, excepturi sunt iste doloremque
            modi vel numquam dicta. Doloremque, debitis harum earum in
            architecto illo excepturi.
          </p>
        </div>

        <img
          style={{ width: "50%", height: "20%" }}
          src='https://assets.indigoimages.ca/transform/e667d8a9-726f-44be-9802-551f85953de6/HP-WK-40-Thrillers-D'
          alt='banner-image'
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "7%",
          marginBottom: "5%",
        }}
        className='new-releases'
      >
        <h2 style={{ marginBottom: "15px", marginLeft: "50px" }}>
          New Releases We Love
        </h2>
        <SuggestedBooks />
      </div>
    </div>
  );
}
