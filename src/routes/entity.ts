import type { StatusTransaksi } from "./EnumDb";

export interface Admintable{
    id: number | null;
    nama: string | null;
    umur: number | null;
    password: string | null;
    jabatan: string | null;
}

export interface Barang {
    id?: number | null;
    nama_barang: string | null;
    jenis_barang: string |null;
    harga_barang: string | null;
    jumlah_barang?: number | null;
    deskripsi_barang: string | null;
}

export interface Barang_Child{
    id_induk: number | null;
    data?: Barang | null;
}

export interface Transaksi{
    nama_barang: string | null;
    jumlah_barang: number | null;
    id_barang: number | null;
    id_user: number | null;
    status: StatusTransaksi;
}