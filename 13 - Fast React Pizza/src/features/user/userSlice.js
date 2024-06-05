import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

const initialState = {
  userName: "",
  status: "idle",
  position: "",
  address: "",
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
        state.error = "";
      })
      .addCase(fetchAdressThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAdressThunk.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateName } = userReducer.actions;

export default userReducer.reducer;

export const getUserName = (state) => state.user.userName;
