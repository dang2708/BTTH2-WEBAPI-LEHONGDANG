import { deleteemployee, postemployee, updateemployee } from "../controllers/employeeController.js";
import { pool } from "../services/mysql.js";

export const userRepo = {
    getUsers: async () => {
        const db = await pool;
        const [rows] = await db.query("SELECT * FROM NHANVIEN");
        return rows;
    },

    postemployee: async (maNV, TenNV, GioiTinh, NgaySinh, email, SDT) => {
        const sql = "INSERT INTO NHANVIEN (maNV, TenNV, GioiTinh, NgaySinh, email, SDT) VALUES (?, ?, ?, ?, ?, ?)";
        const db = await pool;
        const [rows] = await db.query(sql, [maNV, TenNV, GioiTinh, NgaySinh, email, SDT]);
        return rows;
    },

    deleteemployee: async (maNV) => {
        const sql = "DELETE FROM NHANVIEN WHERE maNV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [maNV]);
        return rows;
    },

    updateemployee: async (maNV, TenNV, GioiTinh, NgaySinh, email, SDT) => {
        const sql = "UPDATE NHANVIEN SET TenNV = ?, GioiTinh = ?, NgaySinh = ?, email = ?, SDT = ? WHERE maNV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [TenNV, GioiTinh, NgaySinh, email, SDT, maNV]);
        return rows;
    },

    getemployeeById: async (maNV) => {
        const sql = "SELECT * FROM NHANVIEN WHERE maNV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [maNV]);
        return rows[0];
    },

    getemployeeByName: async (TenNV) => {
        const sql = "SELECT * FROM NHANVIEN WHERE TenNV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [TenNV]);
        return rows[0];
    },
};