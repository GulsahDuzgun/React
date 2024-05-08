import { useEffect, useState } from "react";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const [flag, setFlag] = useState("");
  useEffect(
    function () {
      async function getFlag() {
        try {
          const data = await fetch(
            `https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`
          );
          setFlag(data.url);
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
        <img src={flag} alt="" />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
