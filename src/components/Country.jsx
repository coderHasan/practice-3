import { useState } from "react";

const Country = ({ country, flag }) => {
  const { name, flags } = country;

  const [visit, setVisit] = useState(false);

  const handleVisit = () => {
    setVisit(!visit);
  };

  return (
    <>
      <h1>Name: {name?.common}</h1>
      <img src={flags?.png} alt="" />
      {visit && <h1>Visited</h1>}
      <button onClick={handleVisit}>{visit ? "Visit" : "Goin"}</button>
      <button onClick={() => flag(flags?.png)}>Flag</button>
    </>
  );
};

export default Country;
