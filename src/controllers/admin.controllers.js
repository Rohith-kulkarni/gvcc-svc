import { getAllEnquiries } from "../services/admin.services.js";
export const getAll = async (req, res) => {
  try {
    const allEnquiries = await getAllEnquiries();
    res.status(200).json(allEnquiries);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
