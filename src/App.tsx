import "./App.css";
import heroImg from "./assets/hero-img.png";

function App() {
  return (
    <>
      <div className="page">
        <div className="grid">
          <img src={heroImg} alt="" className="item" />
          <div className="item content">
            <h1 className="heading">
              Imagine if <br />
              <span>Snapchat</span> <br /> had events.
            </h1>
            <p className="text">
              Easily host and share events with your friends across any social
              media.
            </p>
            <button> 🎉 Create my event</button>
          </div>
        </div>
        <button className="sm"> 🎉 Create my event</button>
      </div>
    </>
  );
}

export default App;
