import  { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/InputGroup";

const Location = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState({});
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let residents = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(residents);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location: <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="text-center">Dimension: {dimension || "Unknown"}</h5>
        <h6 className="text-center">Type: {type || "Unknown"}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
