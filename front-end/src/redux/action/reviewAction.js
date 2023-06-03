import axios from "axios";

export const GET_REVIEW = "GET_REVIEW";

export const postReview = (payload) => {
  return async () => {
    const res = await axios.post("http://localhost:3001/reviews", payload);
    return res.data;
  };
};

export const getReviewId = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/reviews/${id}`);
    dispatch({
      type: GET_REVIEW,
      payload: res.data,
    });
  };
};
