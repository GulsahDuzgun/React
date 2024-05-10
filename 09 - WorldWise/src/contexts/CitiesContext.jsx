import { useContext } from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:1227/";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [city, setCity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}cities`);
        const data = await res.json();
        data.map(
          (el, index) =>
            (data[index].url = `https://flagcdn.com/16x12/${el.emoji}.png`)
        );

        //🤪
        // await data
        //   .map((el, index) => ({
        //     code: el.emoji,
        //     index,
        //   }))
        //   .map((el) =>
        //     fetch(`https://flagcdn.com/16x12/${el.code}.png`).then(
        //       (res) => (data[el.index].url = res.url)
        //     )
        //   );

        setCity(data);
      } catch {
        alert("There was an error while loading data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCityDetail(id) {
    try {
      setIsLoading(true);
      const data = await fetch(`${BASE_URL}cities/${id}`);
      const res = await data.json();

      res.url = `https://flagcdn.com/16x12/${res.emoji}.png`;
      setCurrentCity(res);
    } catch {
      throw new Error("There is an error while fetching the city data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ city, isLoading, currentCity, getCityDetail }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "CitiesContext was used outside of the CitiesProvider in DOM tree."
    );
  return context;
}

export { CitiesProvider, useCitiesContext };