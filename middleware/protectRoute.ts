type authTypes = "cookie" | "jwt";

const protectRoute = (type: authTypes) => {
  switch (type) {
    case "cookie":
      return (req, res, next) => {
        if (req.user) {
          next();
        } else {
          res.clearCookie("id");
          res.status(401).send({ success: false, message: "Not authenticated" });
        }
      }
      break;
    case "jwt":
      return (req, res, next) => {
        console.error("JWT currently disabled");
      }
      break;
    default: {
      return (req, res, next) => {
        console.error("No auth specified!")
      }
    }
  }
}