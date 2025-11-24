
import { sinhvienRepo } from "../repositories/sinhvien.js";

// 1. Lấy tất cả sinh viên
export const getSinhVien = async (req, res) => {
  try {
    const listSinhVien = await sinhvienRepo.getSinhVien();
    res.json(listSinhVien);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Lấy sinh viên theo mã (maSV)
export const getSinhVienById = async (req, res) => {
  try {
    const maSV = req.params.maSV;
    const sv = await sinhvienRepo.getSinhVienById(maSV);
    if (sv) {
      res.json(sv);
    } else {
      res.status(404).json({ message: "Sinh viên không tồn tại" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// --- CÁC CHỨC NĂNG MỞ RỘNG THEO YÊU CẦU ---

// 3. Tìm sinh viên có địa chỉ CHỨA tham số (Ví dụ: tìm 'Hà' ra 'Hà Nội', 'Hà Nam')
export const getSinhVienByDiaChi = async (req, res) => {
    try {
      const { diachi } = req.params; // Hoặc dùng req.query.diachi tuỳ route
      // Gọi repo để tìm kiếm gần đúng (LIKE)
      const listSV = await sinhvienRepo.getSinhVienByDiaChi(diachi);
      res.json(listSV);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// 4. Tìm sinh viên có tên CHỨA tham số TenSV
export const getSinhVienByName = async (req, res) => {
    try {
      const { tenSV } = req.params;
      const listSV = await sinhvienRepo.getSinhVienByName(tenSV);
      
      if (listSV && listSV.length > 0) {
          res.json(listSV);
      } else {
          res.json({ message: "Không tìm thấy sinh viên nào phù hợp" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// 5. Tìm sinh viên trên 20 tuổi
export const getSinhVienOver20 = async (req, res) => {
    try {
      // Gọi hàm repo đã xử lý logic tính tuổi
      const listSV = await sinhvienRepo.getSinhVienOver20();
      res.json(listSV);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// --- CÁC CHỨC NĂNG THÊM/SỬA/XÓA CƠ BẢN ---

// Thêm sinh viên
export const postSinhVien = async (req, res) => {
  try {
    const { maSV, TenSV, GioiTinh, DiaChi, NgaySinh } = req.body;

    if (!maSV || !TenSV) {
        return res.status(400).json({ message: "Vui lòng nhập Mã SV và Tên SV!" });
    }

    const sv = await sinhvienRepo.postSinhVien(maSV, TenSV, GioiTinh, DiaChi, NgaySinh);
    res.status(201).json({ message: "Thêm thành công", data: sv });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xoá sinh viên
export const deleteSinhVien = async (req, res) => {
  try {
    const { maSV } = req.params;
    await sinhvienRepo.deleteSinhVien(maSV);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật sinh viên
export const updateSinhVien = async (req, res) => {
  try {
    const { maSV } = req.params;
    const { TenSV, GioiTinh, DiaChi, NgaySinh } = req.body;
    
    await sinhvienRepo.updateSinhVien(maSV, TenSV, GioiTinh, DiaChi, NgaySinh);
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};