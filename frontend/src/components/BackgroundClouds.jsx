import "./BackgroundClouds.css";

function BackgroundClouds() {
  return (
    <div className="clouds">
      {[1, 2, 3, 4, 5].map((cloud) => (
        <div key={cloud} className={`cloud cloud${cloud}`}></div>
      ))}
    </div>
  );
}

export default BackgroundClouds;