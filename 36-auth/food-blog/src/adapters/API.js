const API_ENDPOINT = "http://localhost:3000/api/v1/";
const LOGIN_URL = `${API_ENDPOINT}login`;
const VALIDATE_URL = `${API_ENDPOINT}validate`;
const SIGNUP_URL = `${API_ENDPOINT}users`;
const POSTS_URL = `${API_ENDPOINT}posts`;
const POST_URL = post => `${API_ENDPOINT}posts/${post.id}`;

const jsonify = res => {
  if (!res.ok) throw res;
  return res.json().then(data => {
    if (data.errors) throw data.errors;
    else return data;
  });
};

// const authHeader = () => {
//     Authorisation: localStorage.token
// }

const login = userDetails =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: userDetails })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

const validate = () =>
  fetch(VALIDATE_URL, {
    headers: {
      Authorisation: localStorage.getItem("token")
    }
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });
const postPost = post =>
  fetch(POSTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorisation: localStorage.getItem("token")
    },
    body: JSON.stringify({ post })
  }).then(jsonify);

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  login,
  validate,
  postPost,
  logout
};
