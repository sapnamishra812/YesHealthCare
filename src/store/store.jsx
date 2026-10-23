import { configureStore } from "@reduxjs/toolkit";
import companyBasicReducer from "./companySlice";
import ceoReducers from "./ceoSlice";
import leadersipReducers from "./leadershipSlice";
import marketingTeamReducers from "./marketingTeamSlice";
import distributorsReducers from "./distributorsSlice";
import productSectionsRedcers from "./productSectionsSlice";
export const store = configureStore({
  reducer: {
    companyBasicInfo: companyBasicReducer,
    ceoInfo: ceoReducers,
    leadershipInfo: leadersipReducers,
    marketingTeamInfo: marketingTeamReducers,
    distributorsInfo: distributorsReducers,
    productSectionInfo: productSectionsRedcers,
  },
});
