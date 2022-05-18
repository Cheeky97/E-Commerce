import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2ZjNGYwNWYzYjg4MmVmNmU3MTY1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg5NTkzNSwiZXhwIjoxNjUzMTU1MTM1fQ.Tu988SZR4q745Ev2ejONBgUKFTvHE4TGBLQk97rsBJw";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { authentication: TOKEN }
});