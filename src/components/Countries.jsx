import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ allCountries }) => {
  return (
    <div className="all-countries bg-main-color py-5 px-5 custom-text-white text-start">
      {allCountries.map((country) => {
        const { name, population, region, capital, flags } = country;
        return (
          <div className="bg-elements" key={name.common}>
            <Link
              to={`/${name.common}`}
              className="rounded-2 custom-text-white text-decoration-none"
            >
              <img
                className="w-100 rounded-top "
                src={flags.png}
                alt={flags.alt}
              />
              <div className="d-flex flex-column px-4 py-5 gap-1 ">
                <h2 className="mb-3">{name.common}</h2>
                <p className="m-0">
                  <span className="fw-semibold">Population:</span>
                  {population.toLocaleString()}
                </p>
                <p className="m-0">
                  <span className="fw-semibold">Region:</span>
                  {region}
                </p>
                <p className="m-0">
                  <span className="fw-semibold">Capital:</span>
                  {capital ? capital[0] : name.common}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
