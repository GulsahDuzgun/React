import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./CityItem.module.css";
import { useCitiesContext } from "../contexts/CitiesContext";

function CityItem({ city }) {
  const {
    cityName,
    date,
    id,
    position: { lat, lng },
  } = city;

  const { currentCity } = useCitiesContext();

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const [flag, setFlag] = useState("");

  useEffect(
    function () {
      async function getFlag() {
        try {
          const data = await fetch(
            `https://flagcdn.com/16x12/${city.emoji}.png`
          );
          const res = data.url;
          setFlag(res);
        } catch (err) {
          console.log(err);
        }
      }

      getFlag();
    },
    [city]
  );

  return (
    <li>
      <Link
        to={`${id}?lat=${lat}&lng=${lng}`}
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles["cityItem--active"] : ""
        }  `}
      >
        <span className={styles.emoji}>
          <img src={flag} alt="" />
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
