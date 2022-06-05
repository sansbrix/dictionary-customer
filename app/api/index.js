import api from "./api";

const UserSignup = (data) => api.post(`/signUp`, data); // done
const UserLogin = (data) => api.post(`/login`, data);  // done
const UpdateUserProfile = (data) => api.post(`/updateProfile`, data); // error
const listData = (data) => api.post(`/listData`, data); // pending
const sendInvite = (data) => api.get(`/sendInvite`, data); // error
const addUserDefinedWords = (data) => api.post(`/addUserDefinedWords`, data); // error
const extractLanguages = (data) => api.post(`/extractLanguages`, data); // pending
const translateWordApi = (data) => api.post(`/translateWord`, data); // pending
const showMatchWordsPuzzle = (data) => api.post(`/showMatchWordsPuzzle`, data); // pending
const addWordsQuizResult = (data) => api.post(`/addWordsQuizResult`, data); // pending
const showWordsQuizById = (data) => api.post(`/showWordsQuizById`, data); // pending
const getUserProfile = () => api.get(`/userProfile`);
const sendOtp = data => api.post(`/send-otp`, data);
const confirmOtp = data => api.post(`/confirm-otp`, data);
const fetchLessonNameById = id => api.post(`/fetchLessonNameById`, id);
const wordsWithPictures = id => api.post(`/wordsWithPictures`, id);
const logout = () =>api.post(`/logout`);
export {
    UserSignup,
    UserLogin,
    UpdateUserProfile,
    listData,
    sendInvite,
    addUserDefinedWords,
    extractLanguages,
    translateWordApi,
    showMatchWordsPuzzle,
    addWordsQuizResult,
    showWordsQuizById,
    getUserProfile,
    sendOtp,
    confirmOtp,
    fetchLessonNameById,
    wordsWithPictures,
    logout
}