import axios from "axios";

export const instance = axios.create({
    // baseURL: "https://ksa-seminar-res-backend.herokuapp.com/",
    baseURL: "http://localhost:3000/",
});

const responseBody = (response) => response.data;

const requests = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, body) => instance.post(url, body).then(responseBody),
    put: (url, body) => instance.put(url, body).then(responseBody),
    delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export const Reservation = {
    getReservationList: async () => requests.get('log/seminar'),
    getUserLog: async (body) => requests.post('log/userLog', body),
    getDayLog: async (body) => requests.post('log/dayLog', body),
    // getAccount: async (sid) => requests.get(`account/${sid}`),
    // createAccount: async (sid, body) =>
    //     requests.post(`account/${sid}`, body),
    // updateAccount: async (sid, body) =>
    //     requests.put(`account/${sid}`, body),
    // deleteAccount: async (sid, body) =>
    //     requests.delete(`account/${sid}`, body)
}