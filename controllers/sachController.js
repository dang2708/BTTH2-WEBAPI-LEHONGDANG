
import { sachRepo } from "../repositories/sach.js";

// Lấy danh sách tất cả sách
export const getSach = async (req, res) => {
  try {
    const listSach = await sachRepo.getSach();
    res.json(listSach);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy sách theo tên sách
export const getSachByName = async (req, res) => {
  try {
    const tenSach = req.params.tenSach;
    const sach = await sachRepo.getSachByName(tenSach);
    if (sach) {
      res.json(sach);
    } else {
      res.status(404).json({ message: "Sách không tồn tại" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy sách theo mã sách (MASH)
export const getSachById = async (req, res) => {
  try {
    const maSach = req.params.maSach;
    const sach = await sachRepo.getSachById(maSach);
    if (sach) {
      res.json(sach);
    } else {
      res.status(404).json({ message: "Sách không tồn tại" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm sách mới
export const postSach = async (req, res) => {
  try {
    // Lấy dữ liệu từ body, khớp với cột trong Database
    const { MASH, TENSACH, TACGIA, NHAXB, NAMXB } = req.body;

    if (!MASH) {
        return res.status(400).json({ message: "Vui lòng nhập mã sách (MASH)!" });
    }

    const sach = await sachRepo.postSach(MASH, TENSACH, TACGIA, NHAXB, NAMXB);
    
    res.status(201).json({ message: "Thêm sách thành công", data: sach });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xoá sách
export const deleteSach = async (req, res) => {
  try {
    const { maSach } = req.params;
    await sachRepo.deleteSach(maSach);
    res.json({ message: "Xoá sách thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật thông tin sách
export const updateSach = async (req, res) => {
  try {
    const { maSach } = req.params;
    const { TENSACH, TACGIA, NHAXB, NAMXB } = req.body;
    
    await sachRepo.updateSach(maSach, TENSACH, TACGIA, NHAXB, NAMXB);
    res.json({ message: "Cập nhật sách thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};