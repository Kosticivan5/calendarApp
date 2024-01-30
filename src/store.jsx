import { configureStore, combineReducers } from "@reduxjs/toolkit";
import calendarReducer from "./features/calendar/calendarSlice";
import eventInfoReducer from "./features/eventInfo/EventInfoSlice";
import formatDropdownReducer from "./features/formatDropdown/formatDropdownSlice";
import typesDropdownReducer from "./features/typesDropdown/typesDropdownSlice";
import searchbarReducer from "./features/Searchbar/searchbarSlice";
import checkboxesReducer from "./features/checkboxes/checkboxesSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";
// redux persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  eventInfo: eventInfoReducer,
  formatDropdown: formatDropdownReducer,
  typesDropdown: typesDropdownReducer,
  searchBarFilter: searchbarReducer,
  checkboxes: checkboxesReducer,
  sidebar: sidebarReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
