import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider as SCTheme } from "styled-components";

import {
  constants as exampleConstants,
  fetchSolarData
} from "./store/storeExample";
import theme from "./theme";

import Card from "./components/Card"
import { CardWrapper } from "./components/styles/Card.styled";
import GlobalStyles from "./components/styles/Global";


function App() {
  const dispatch = useDispatch();

  const solarData = useSelector((state) => state[exampleConstants.STORE_NAME].solarList.bodies)
  const error = useSelector((state) => state[exampleConstants.STORE_NAME].error)

  useEffect(() => {
    dispatch(fetchSolarData())
  }, [dispatch])



  return (
    <SCTheme theme={theme}>
      <>
        <GlobalStyles />
        {error ? <div>Something went wrong!!!</div> : (
          <CardWrapper>
            {solarData && solarData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </CardWrapper>
        )}
      </>
    </SCTheme>
  );
}

export default App;