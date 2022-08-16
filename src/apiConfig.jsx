let apiUrl;

// set the empty value and assign it depending on the location hostname

const apiUrls = {
  production: "https://lg-shopping-mysql.herokuapp.com",
  development: "https://lg-shopping-mysql.herokuapp.com",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
export default apiUrl;
