import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider as SCTheme } from "styled-components";

import {
  constants as exampleConstants,
  fetchSolarData
} from "./store/storeExample";
import theme from "./theme";

import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import CardList from "./components/CardList";


function App() {
  const dispatch = useDispatch();


  const solarData = useSelector((state) => state[exampleConstants.STORE_NAME].solarList)
  const error = useSelector((state) => state[exampleConstants.STORE_NAME].error)
  const selectedCategory = useSelector((state) => state[exampleConstants.STORE_NAME].selectedCategory)
  const [list, setList] = useState(solarData)
  const [sortOrder, setSortOrder] = useState('');


  useEffect(() => {
    dispatch(fetchSolarData())
  }, [dispatch])


  useEffect(() => {
    setList(solarData)
  }, [solarData]);


  const comparator = (order) => {
    return function (a, b) {
      return order === 'asc' ? b.englishName.localeCompare(a.englishName) : a.englishName.localeCompare(b.englishName);
    }
  }

  const handleSort = () => {
    setList(list.sort(comparator(sortOrder)));
    setSortOrder(item => item === 'asc' ? 'desc' : 'asc');
  }


  return (
    <SCTheme theme={theme}>
      <>
        <GlobalStyles />
        <Header handleSort={handleSort} list={list} />
        {error ? <div>Something went wrong!!!</div> : (
          <CardList list={list} selectedCategory={selectedCategory} />
        )}
      </>
    </SCTheme>
  );
}

export default App;
