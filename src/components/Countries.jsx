import { useEffect, useState } from "react";
import Country from "./country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitflag, setVisitFlag] = useState([]);

  const handleFlag = (flag) => {
    const newFlag = [...visitflag, flag];
    setVisitFlag(newFlag);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div>
        {visitflag.map((flag, index) => (
          <img key={index} src={flag} alt="" />
        ))}
      </div>
      Countries: {countries.length}
      {countries?.map((country) => (
        <Country
          key={country.cca2}
          country={country}
          flag={handleFlag}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
