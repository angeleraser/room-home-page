import React, { createContext, useState } from "react";
import Header from "../components/Header/Header";
export const SliderContext = createContext();
export const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const providerValue = {
    currentImageIndex,
    setCurrentImageIndex,
  };
  return (
    <SliderContext.Provider value={providerValue}>
      <Header />
    </SliderContext.Provider>
  );
};
