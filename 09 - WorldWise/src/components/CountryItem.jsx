import { useEffect } from "react";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  useEffect(
    function () {
      async function getFlag() {
        try {
          const data = await fetch(
            `https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`
          );
          const res = data.url;
          country.flag = res;
        } catch (err) {
          console.log(err);
        }
      }

      getFlag();
    },
    [country]
  );

  return (
    <li className={styles.countryItem}>
      <span>
        <img src={country.flag} alt="flag" />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
