import { pool } from "../services/mysql.js";
export const sinhvienRepo = {
    getSinhVien: async () => {
        const db = await pool;
        const [rows] = await db.query("SELECT * FROM sinhvien");
        return rows;
    },
    
    getSinhVienById: async (maSV) => {
        const sql = "SELECT * FROM SINHVIEN WHERE maSV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [maSV]);
        return rows[0];
    },

    getSinhVienByDiaChi: async (diachi) => {
        const sql = "SELECT * FROM SINHVIEN WHERE diachi LIKE ?";
        const db = await pool;
        const [rows] = await db.query(sql, [`%${diachi}%`]);
        return rows;
    },

    getSinhVienByName: async (tenSV) => {
        const sql = "SELECT * FROM SINHVIEN WHERE tenSV LIKE ?";
        const db = await pool;
        const [rows] = await db.query(sql, [`%${tenSV}%`]);
        return rows;
    },

    getSinhVienOver20: async () => {
        const sql = "SELECT * FROM SINHVIEN WHERE TIMESTAMPDIFF(YEAR, NgaySinh, CURDATE()) > 20";
        const db = await pool;
        const [rows] = await db.query(sql);
        return rows;
    },
    
    postSinhVien: async (maSV, tenSV, gioiTinh, ngaySinh, diaChi, email, sdt) => {
        const sql = "INSERT INTO SINHVIEN (maSV, tenSV, gioiTinh, ngaySinh, diaChi, email, sdt) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const db = await pool;
        const [rows] = await db.query(sql, [maSV, tenSV, gioiTinh, ngaySinh, diaChi, email, sdt]);
        return rows;
    },

    deleteSinhVien: async (maSV) => {
        const sql = "DELETE FROM SINHVIEN WHERE maSV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [maSV]);
        return rows;
    },

    updateSinhVien: async (maSV, tenSV, gioiTinh, ngaySinh, diaChi, email, sdt) => {
        const sql = "UPDATE SINHVIEN SET tenSV = ?, gioiTinh = ?, ngaySinh = ?, diaChi = ?, email = ?, sdt = ? WHERE maSV = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [tenSV, gioiTinh, ngaySinh, diaChi, email, sdt, maSV]);
        return rows;
    },
};