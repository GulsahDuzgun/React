import { useEffect } from "react";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { cityName, date } = city;

  useEffect(
    function () {
      async function getFlag() {
        try {
          const data = await fetch(
            `https://flagcdn.com/16x12/${city.emoji.toLowerCase()}.png`
          );
          const res = data.url;
          city.emoji = res;
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }

      getFlag();
    },
    [city]
  );

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>
        <img src={city.emoji} alt="Flag" />
      </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
