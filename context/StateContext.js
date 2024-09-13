'use client';
import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';

const initialState = {
  ownerData: Cookies.get("ownerData") ? JSON.parse(Cookies.get("ownerData")) : {},
  renterData: Cookies.get("renterData") ? JSON.parse(Cookies.get("renterData")) : {},
  stage_o: Cookies.get("stage_o") ? parseInt(Cookies.get("stage_o")) : 1,
  stage: Cookies.get("stage") ? parseInt(Cookies.get("stage")) : 1,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_OWNER_DATA': {
      const updatedOwnerData = { ...state.ownerData, ...action.payload };
      Cookies.set("ownerData", JSON.stringify(updatedOwnerData));
      return { ...state, ownerData: updatedOwnerData };
    }
    case 'UPDATE_RENTER_DATA': {
      const updatedRenterData = { ...state.renterData, ...action.payload };
      Cookies.set("renterData", JSON.stringify(updatedRenterData));
      return { ...state, renterData: updatedRenterData };
    }
    case 'SET_STAGE_O': {
      Cookies.set("stage_0", action.payload.toString());
      return { ...state, stage_o: action.payload };
    }
    case 'SET_STAGE': {
      Cookies.set("stage", action.payload.toString());
      return { ...state, stage: action.payload };
    }
    default:
      return state;
  }
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
