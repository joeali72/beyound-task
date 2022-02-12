import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./wather/wather";

const store = configureStore({
  reducer: { weather: weatherSlice },
});

export default store;
