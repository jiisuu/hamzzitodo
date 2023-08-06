import { useState } from "react";
import "./App.css";
import like from "./heart.svg";
import heartFilled from "./heart-filled.svg";

const Card = () => {
  const [heart, setHeart] = useState(false);

  return (
    <div className="card">
      <div className="header">
        <img
          alt=""
          className="header-image"
          src="https://i.namu.wiki/i/MtcAn7yyzd-InAcywYTcAIW-ey2OhRpfYVxSi1xFyxm6LE2OYK5GE0b98kG_86yldmlQrlWGPUfzdBid-HDyZw.webp"
        ></img>
        <div className="icon" onClick={() => setHeart(!heart)}>
          <img
            src={heart ? heartFilled : like}
            className="like-icon"
            alt="like"
          />
        </div>
      </div>
      <div className="details">
        <div className="details-title">
          뉴진스 슈퍼샤이 들으면서 코딩하기 개꿀잼 30자 까지
        </div>
        <div className="mastername-wrapper">
          <span className="details-mastername-main">두 번째 세부 정보</span>
          <span className="details-bar"></span>
          <span className="details-mastername-second">세 번째 세부 정보</span>
        </div>
      </div>
      <div className="labels">
        <span className="label">BEST</span>
        <span className="label">NEW</span>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <h2 className="home-title">지금 핫한 꿀터디!</h2>
      <div className="container-box">
        <Card />
        <Card />
      </div>
      <div className="container-box">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
