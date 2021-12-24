import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { countries } from '../redux/coronaData/coronaData';

const today = new Date().toISOString().split('T')[0];

const Details = () => {
  const params = useParams();
  const { id } = params;
  const country = useSelector(countries).find((country) => country.id === id);
  const states = country.regions.length > 0 ? (
    country.regions.map((region, index) => (
      <div
        className={`d-flex justify-content-between
          align-items-center p-2 text-white
          ${index % 2 ? 'bg-blue-dark' : 'bg-blue-light'}`}
        key={region.id}
      >
        <h5 className="m-0 fw-light">{region.name}</h5>
        <span className="d-flex align-items-center">
          <p className="m-0 me-2">
            {Number(region.today_confirmed).toLocaleString()}
            {' '}
            Cases
          </p>
        </span>
      </div>
    ))
  ) : (
    <div className="bg-blue-dark text-white d-flex align-items-center p-2">
      <h5 className="m-0 fw-light ps-3">
        These Regions Are Currently Not At Our Disposal
      </h5>
    </div>
  );

  return (
    <div className="pt-3 bg-blue-light">
      <Row className="m-0">
        <Col
          xs={6}
          sm={6}
          md={6}
          className="p-0 text-white d-flex flex-column justify-content-center align-items-end pe-4"
        >
          <h1 className="fw-bold m-0">
            {country ? country.name.toUpperCase() : 'Loading...'}
          </h1>
          <p>
            {country ? Number(country.today_confirmed).toLocaleString() : '0'}
            {' '}
            Total Cases
          </p>
        </Col>
      </Row>
      <Row className="m-0 mt-4 bg-blue-dark">
        <h6 className="text-black fw-bold p-2 m-0">
          {`${country.name.toUpperCase()} CASES BREAKDOWN`}
        </h6>
        <div>
          <h2 className="stats-title">
            Country Breakdown
            {' '}
            {today}
          </h2>
          <ul key={country.id} className="flex flex-dir stat-container">
            <li className="navLink w-100 stats">
              Today&apos;s confirmed:
              {country.today_confirmed}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s deaths:
              {country.today_deaths}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s new recovered:
              {country.today_new_recovered}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s new confirmed:
              {country.today_new_confirmed}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s new deaths:
              {country.today_new_deaths}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s new open cases:
              {country.today_new_open_cases}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s new recovered:
              {country.today_open_cases}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s recovered:
              {country.today_recovered}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s confirmed:
              {country.today_confirmed}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s vs yesterday&apos;s confirmed:
              {country.today_vs_yesterday_confirmed}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s vs yesterday&apos;s deaths:
              {country.today_vs_yesterday_deaths}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s vs yesterday&apos;s open cases:
              {country.today_vs_yesterday_open_cases}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s vs yesterday&apos;s recovered:
              {country.today_vs_yesterday_recovered}
            </li>
            <li className="navLink w-100 stats">
              Yesterday&apos;s confirmed:
              {country.yesterday_confirmed}
            </li>
            <li className="navLink w-100 stats">
              Yesterday&apos;s deaths:
              {country.yesterday_deaths}
            </li>
            <li className="navLink w-100 stats">
              Yesterday&apos;s open cases:
              {country.yesterday_open_cases}
            </li>
            <li className="navLink w-100 stats">
              Yesterday&apos;s recovered:
              {country.yesterday_recovered}
            </li>
          </ul>
        </div>
      </Row>
      <h6 className="text-white fw-bold p-2 m-0">
        {`${country.name.toUpperCase()} CASES BREAKDOWN BY REGION`}
      </h6>
      {states}
    </div>
  );
};

export default Details;
