import ReactDOM from "react-dom";
import "./index.css";
import Globe from "react-globe.gl";

let data: number[][] = [];

async function main() {
  const prom = fetch("http://localhost:3000/aispoints.json")
    .then((r) => r.json())
    .then((d) => {
      data = d;
    });

  await prom;

  ReactDOM.render(<App />, document.getElementById("root"));
}

function App(_props: {}) {
  const N = data.length;
  const gData = [...Array(N).keys()].map((_, idx) => {
    return {
      lat: data[idx][0],
      lng: data[idx][1],
      size: Math.random() / 3,
      color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    };
  });

  return (
    <div className="App">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={gData}
        pointAltitude={() => 0.01}
        pointColor={"color"}
      />
    </div>
  );
}

main();
