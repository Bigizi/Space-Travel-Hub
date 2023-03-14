import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get(url);
    const missions = response.data;
    console.log(missions);
    return missions.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload.map((mission) => ({
        ...mission,
        joined: false,
      })),
    }));
  },
});

export default missionsSlice.reducer;
