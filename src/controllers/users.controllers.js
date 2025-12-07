import {
  addEnquiry,
  getAllProducts,
  getProdById,
} from "../services/users.services.js";

export const getAll = async (req, res) => {
  try {
    const { page, limit, search, category } = req.query;
    const products = await getAllProducts({
      page: Number(page),
      limit: Number(limit),
      search,
      category,
    });
    res.status(200).json(products);
  } catch (e) {
    console.error("Error in getAll:", e);
    res.status(500).json(e);
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProdById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const postEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message, id } = req.body;
    const { mess } = await addEnquiry({
      name: name,
      email: email,
      phone: phone,
      message: message,
      id: id,
    });
    res.status(200).json({ res: "Enquiry successful" });
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};
