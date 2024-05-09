// import styles from "./City.module.css";
import { useCitiesContext } from "../contexts/CitiesContext";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { useEffect } from "react";
import ButtonBack from "./ButtonBack";
import { useState } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const [flag, setFlag] = useState("");

  const { id } = useParams();
  const { isLoading, currentCity, getCityDetail } = useCitiesContext();
  const { cityName, emoji, date, notes } = currentCity;

  useEffect(
    function () {
      getCityDetail(id);
    },
    [id]
  );

  useEffect(
    function () {
      async function getFlag() {
        try {
          const data = await fetch(`https://flagcdn.com/16x12/${emoji}.png`);
          const res = data.url;
          setFlag(res);
        } catch (err) {
          console.log(err);
        }
      }

      getFlag();
    },
    [emoji]
  );

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>
            <img src={flag} alt="" />
          </span>{" "}
          {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;
