import axios from "axios";

export const instance = axios.create({
    baseURL: "https://ksa-seminar-res-backend.herokuapp.com/",
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
    // getAccount: async (sid) => requests.get(`account/${sid}`),
    // createAccount: async (sid, body) =>
    //     requests.post(`account/${sid}`, body),
    // updateAccount: async (sid, body) =>
    //     requests.put(`account/${sid}`, body),
    // deleteAccount: async (sid, body) =>
    //     requests.delete(`account/${sid}`, body)
}