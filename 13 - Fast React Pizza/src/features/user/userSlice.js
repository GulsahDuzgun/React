/*
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

const initialState = {
  userName: "",
  status: "idle",
  position: "",
  adress: "",
  error: "",
};

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  const userAdress = await getAddress(position);
  const address = `${userAdress?.locality}, ${userAdress?.city} ${userAdress?.postcode}, ${userAdress?.countryName}`;

  return { position, address };
}

export const fetchAdressThunk = createAsyncThunk(
  "user/fetchAddress",
  fetchAddress,
);

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdressThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAdressThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.position = action.payload.position;
        state.adress = action.payload.address;
      })
      .addCase(fetchAdressThunk.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateName } = userReducer.actions;

export default userReducer.reducer;

export const getUserName = (state) => state.user.userName;
