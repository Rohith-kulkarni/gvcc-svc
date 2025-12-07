import db from "../config/db.js";
export const getAllEnquiries = async () => {
  const enquiries = await db.all(`SELECT * FROM enquiries`);
  if (!enquiries) {
    throw new Error("Unable to get enquiries");
  }
  return enquiries;
};
