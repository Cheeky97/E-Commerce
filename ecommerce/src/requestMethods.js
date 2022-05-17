import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2ZjNGYwNWYzYjg4MmVmNmU3MTY1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc5MjM3NSwiZXhwIjoxNjUzMDUxNTc1fQ.ewpX4EPxLtjZm94vKFPTf5pQPNBJWZXNuQsLUvB2w8k";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});