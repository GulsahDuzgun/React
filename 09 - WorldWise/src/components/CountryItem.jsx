import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <img src={country.url} alt="" />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
