import { loginUser, signupUser } from "../services/auth.services.js";

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(401).send("All fields are required");
    }
    const { token, regEmail } = await signupUser({ email, password, name });
    res.status(200).json({ token: token, email: regEmail });
  } catch (e) {
    res.status(500).send(`Error:${e}`);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ Error: "All fields are required" });
    }
    const { regEmail, token, username } = await loginUser({ email, password });
    res.status(200).json({ token: token, email: regEmail, name: username });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
