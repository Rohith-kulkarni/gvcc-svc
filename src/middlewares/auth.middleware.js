import jwt from "jsonwebtoken";

export const authRequired = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
      return res.status(401).json({ Error: "Token is missing" });
    }
    const token = authHeaders.split(" ")[1];
    const isValidToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!isValidToken) {
      return res.status(401).json({ Error: "Invalid token" });
    }
    next();
  } catch (e) {
    res.status(500).json({ Error: e });
  }
};
