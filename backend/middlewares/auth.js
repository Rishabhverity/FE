const { getUser } = require("../service/auth");

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;

  console.log("Token from cookie:", tokenCookie); // Log the token for debugging

  if (!tokenCookie) {
    console.log("No token found in cookies");
    return next(); // No token, proceed to the next middleware
  }

  const token = tokenCookie;
  const user = getUser(token); // Verify the token and get the user

  if (user) {
    console.log("User authenticated:", user);
    req.user = user; // If valid user, attach to req object
  } else {
    console.log("Invalid or expired token"); // Log if the token is invalid
  }

  return next(); // Proceed to the next middleware
}


module.exports = { checkForAuthentication };
