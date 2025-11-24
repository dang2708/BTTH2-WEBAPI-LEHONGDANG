import e from "express";
import { employeeRepo } from "../repositories/employee.js";

export const getemployee = async (req, res) => {
  try {
    const employee = await employeeRepo.getemployee();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// lấy nhân viên theo tên
export const getemployeeByName = async (req, res) => {
  try {
    const TenNV = req.params.TenNV;
    const employee = await employeeRepo.getemployeeByName(TenNV);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Nhân viên không tồn tại" });
    }} catch (err) {
    res.status(500).json({ message: err.message });
  }};

  // lấy nhân viên theo mã
export const getemployeeById = async (req, res) => {
  try { 
    const maNV = req.params.maNV;
    const employee = await employeeRepo.getemployeeById(maNV);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Nhân viên không tồn tại" });
    }} catch (err) {
    res.status(500).json({ message: err.message });
  }};

// thêm nhân viên
export const postemployee = async (req, res) => {
  try {
   
    const { maNV, TenNV, GioiTinh, NgaySinh, email, SDT } = req.body;

   
    if (!maNV) {
        return res.status(400).json({ message: "Vui lòng nhập maNV!" });
    }

    const employee = await employeeRepo.postemployee(maNV, TenNV, GioiTinh, NgaySinh, email, SDT);
    
    res.status(201).json({ message: "Thêm thành công", data: employee });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// xoá nhân viên  
export const deleteemployee = async (req, res) => {
  try {
    const { maNV } = req.params;
    await employeeRepo.deleteemployee(maNV);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }};

// cập nhật nhân viên
export const updateemployee = async (req, res) => {
  try {
    const { maNV } = req.params;
    const { TenNV, GioiTinh, NgaySinh, email, SDT } = req.body;
    await employeeRepo.updateemployee(maNV, TenNV, GioiTinh, NgaySinh, email, SDT);
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }};
