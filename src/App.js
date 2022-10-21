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
  const [list, setList] = useState(sessionStorage.getItem("list") == null ? solarData : JSON.parse(sessionStorage.getItem("list")))
  const [sortOrder, setSortOrder] = useState('');


  useEffect(() => {
    dispatch(fetchSolarData())
  }, [dispatch])


  useEffect(() => {
    if (sessionStorage.getItem("list") == null) {
      setList(solarData)
    } else {
      return JSON.parse(sessionStorage.getItem("list"))
    }
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




  const addItem = (state) => {
    console.log(state)
    let newList = [...list]
    newList.push(state)
    setList(newList)
    sessionStorage.setItem("list", JSON.stringify(newList))
  }

  return (
    <SCTheme theme={theme}>
      <>
        <GlobalStyles />
        <Header handleSort={handleSort} list={list} addItem={addItem} sortOrder={sortOrder} />
        {error ? <div>Something went wrong!!!</div> : (
          <CardList list={list} selectedCategory={selectedCategory} />
        )}
      </>
    </SCTheme>
  );
}

export default App;
