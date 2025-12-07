import db from "../config/db.js";
export const getAllProducts = async ({
  search = "",
  category = "",
  page = 1,
  limit = 5,
}) => {
  const off = (page - 1) * limit;

  let whereClauses = [];
  let params = [];

  if (search) {
    whereClauses.push("LOWER(name) LIKE LOWER(?)");
    params.push(`%${search}%`);
  }

  if (category) {
    whereClauses.push("LOWER(category) LIKE LOWER(?)");
    params.push(`%${category}%`);
  }

  const whereSQL =
    whereClauses.length > 0 ? "WHERE " + whereClauses.join(" AND ") : "";

  // Count query
  const countQuery = `SELECT COUNT(*) AS total FROM products ${whereSQL}`;
  const countRows = await db.get(countQuery, params);
  const totalCount = countRows.total;

  // Paginated data
  const dataQuery = `
    SELECT * FROM products
    ${whereSQL}
    LIMIT ? OFFSET ?
  `;

  const data = await db.all(dataQuery, [...params, Number(limit), Number(off)]);

  return { products: data, totalCount };
};

export const getProdById = async (id) => {
  const prod = db.get(`SELECT * FROM products WHERE id=${id}`);
  if (!prod) {
    throw new Error("Product not found");
  }
  return prod;
};

export const addEnquiry = async ({ name, email, phone, message, id }) => {
  const mess = await db.run(
    `INSERT INTO enquiries(name, email, phone, message, product_id) values(?,?,?,?,?)`,
    [name, email, phone, message, id]
  );
  if (!mess) {
    console.log("post failed");
    throw new Error("Error while posting enquiry");
  }
  return mess;
};
