import { supabase } from "$lib/supabase/dbConnect";
import { StatusComplain } from "./EnumDb";

interface Complain_Jumlah {
  Belum_ditinjau?: number;
  Sudah_Ditinjau?: number;
  Tak_Dapat_Ditangani?: number;
}

export interface Box {
  Nama: string;
  Deksripsi: string;
  Angka: number;
  icon?: string;
  Complain?: Complain_Jumlah;
}

export const load = async () => {

  const { count: countUser, error: errorUser } = await supabase
    .from("admintest")
    .select("*", { count: "exact", head: true })
    .not("id", "is", null);
  if (errorUser) console.error("Error counting admintest:", errorUser);

  const { count: countBarang, error: errorBarang } = await supabase
    .from("barang")
    .select("*", { count: "exact", head: true })
    .not("id", "is", null);
  if (errorBarang) console.error("Error counting barang:", errorBarang);

  const { count: countTransaksi, error: errorTransaksi } = await supabase
    .from("transaksi")
    .select("*", { count: "exact", head: true })
    .not("id", "is", null);
  if (errorTransaksi) console.error("Error counting transaksi:", errorTransaksi);

  const { count: countBelumDitinjau } = await supabase
    .from("user_complain")
    .select("*", { count: "exact", head: true })
    .eq("Status", StatusComplain.Belum_Ditinjau);

  const { count: countSudahDitinjau } = await supabase
    .from("user_complain")
    .select("*", { count: "exact", head: true })
    .eq("Status", StatusComplain.Sudah_Ditinjau);

  const { count: countTakDapatDitangani } = await supabase
    .from("user_complain")
    .select("*", { count: "exact", head: true })
    .eq("Status", StatusComplain.Tak_Dapat_Ditangani);

  return {
    User: {
      Nama: "User Terintegrasi",
      Deksripsi: "Jumlah user yang terhubung ke sistem",
      Angka: countUser ?? 0,
      icon: "user-icon"
    } as Box,
    Barang: {
      Nama: "Total Barang",
      Deksripsi: "Jumlah barang yang tersedia",
      Angka: countBarang ?? 0,
      icon: "box-icon"
    } as Box,
    Transaksi: {
      Nama: "Total Transaksi",
      Deksripsi: "Jumlah transaksi yang tercatat",
      Angka: countTransaksi ?? 0,
      icon: "transaction-icon"
    } as Box,
    ComplainPelanggan: {
      Nama: "Total Complain",
      Deksripsi: "Jumlah complain pelanggan berdasarkan status",
      Angka: (countBelumDitinjau ?? 0) + (countSudahDitinjau ?? 0) + (countTakDapatDitangani ?? 0),
      icon: "complain-icon",
      Complain: {
        Belum_ditinjau: countBelumDitinjau ?? 0,
        Sudah_Ditinjau: countSudahDitinjau ?? 0,
        Tak_Dapat_Ditangani: countTakDapatDitangani ?? 0
      }
    } as Box
  };
};
