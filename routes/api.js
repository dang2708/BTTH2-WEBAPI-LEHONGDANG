import express from "express";
import { getUsers } from "../controllers/userController.js";
import { getemployee,postemployee,deleteemployee,updateemployee,getemployeeById,getemployeeByName } from "../controllers/employeeController.js";
import { getSach, getSachByName, getSachById, postSach,deleteSach,updateSach } from "../controllers/sachController.js";
import { getSinhVien,getSinhVienByDiaChi,getSinhVienById,getSinhVienByName,getSinhVienOver20,postSinhVien,deleteSinhVien,updateSinhVien  } from "../controllers/sinhvienController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to API route" });
});

// -----------------------users---------------------------

// Route: GET /api/users
router.get("/users/", getUsers);
// -----------------------employee---------------------------
// Route: GET /api/users/:id
router.get("/employee/", getemployee);
router.post("/employee/", postemployee);
router.delete("/employee/:maNV", deleteemployee);
router.put("/employee/:maNV", updateemployee);
router.get("/employee/id/:maNV", getemployeeById);
router.get("/employee/name/:TenNV", getemployeeByName);
export default router;


// -----------------------sach---------------------------
router.get("/sach/", getSach);
router.get("/sach/name/:tenSach", getSachByName);
router.get("/sach/id/:maSach", getSachById);
router.post("/sach/", postSach);
router.delete("/sach/:MASH", deleteSach);
router.put("/sach/:MASH", updateSach);

// -----------------------sinhvien---------------------------
router.get("/sinhvien/", getSinhVien);
router.get("/sinhvien/id/:maSV", getSinhVienById);
router.get("/sinhvien/name/:tenSV", getSinhVienByName);
router.get("/sinhvien/diachi/:diachi", getSinhVienByDiaChi);
router.get("/sinhvien/over20/", getSinhVienOver20);
router.post("/sinhvien/", postSinhVien);
router.delete("/sinhvien/:maSV", deleteSinhVien);
router.put("/sinhvien/:maSV", updateSinhVien);