import { pool } from "../services/mysql.js";

export const sachRepo = {
    getSach: async () => {
        const db = await pool;
        const [rows] = await db.query("SELECT * FROM SACH");
        return rows;
    },

    postSach: async (MASH, TENSACH, TACGIA, NHAXB, NAMXB) => {
        const sql = "INSERT INTO SACH (MASH, TENSACH, TACGIA, NHAXB, NAMXB) VALUES (?, ?, ?, ?, ?)";
        const db = await pool;
        const [rows] = await db.query(sql, [MASH, TENSACH, TACGIA, NHAXB, NAMXB]);
        return rows;
    },

    getSachById: async (MASH) => {
        const sql = "SELECT * FROM SACH WHERE MASH = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [MASH]);
        return rows[0];
    },

    getSachByName: async (TENSACH) => {
        const sql = "SELECT * FROM SACH WHERE TENSACH = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [TENSACH]);
        return rows[0];
    },

    postSach: async (MASH, TENSACH, TACGIA, NHAXB, NAMXB) => {
        const sql = "INSERT INTO SACH (MASH, TENSACH, TACGIA, NHAXB, NAMXB) VALUES (?, ?, ?, ?, ?)";
        const db = await pool;
        const [rows] = await db.query(sql, [MASH, TENSACH, TACGIA, NHAXB, NAMXB]);
        return rows;
    },

    deleteSach: async (MASH) => {
        const sql = "DELETE FROM SACH WHERE MASH = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [MASH]);
        return rows;
    },

    updateSach: async (MASH, TENSACH, TACGIA, NHAXB, NAMXB) => {
        const sql = "UPDATE SACH SET TENSACH = ?, TACGIA = ?, NHAXB = ?, NAMXB = ? WHERE MASH = ?";
        const db = await pool;
        const [rows] = await db.query(sql, [TENSACH, TACGIA, NHAXB, NAMXB, MASH]);
        return rows;
    },
};