// CCTV Data Configuration
// Tambahkan atau edit daftar CCTV di sini

export interface CCTVItem {
    id: number;
    name: string;
    url: string;
    location?: string;
}

export const cctvList: CCTVItem[] = [
    {
        id: 1,
        name: "Tugu Kopi",
        url: "http://localhost:8888/tugu-kopi/",
        location: "Jl. Raya Tugu Kopi",
    },
    {
        id: 2,
        name: "Simpang Kepur PTZ",
        url: "http://localhost:8888/simpang-kepur-ptz/",
        location: "Persimpangan Kepur",
    },
    {
        id: 3,
        name: "Tugu Adipura",
        url: "http://localhost:8888/tugu-adipura/",
        location: "Pusat Kota",
    },
    {
        id: 4,
        name: "Simpang Kepur 01",
        url: "http://localhost:8888/simpang-kepur-01/",
        location: "Terminal Utama",
    },
    {
        id: 5,
        name: "Pasar Sentral",
        url: "http://10.10.0.50/pasar-sentral",
        location: "Pasar Tradisional",
    },
    {
        id: 6,
        name: "Bundaran HI",
        url: "http://10.10.0.50/bundaran-hi",
        location: "Bundaran Hotel Indonesia",
    },
    {
        id: 7,
        name: "Stasiun Kereta",
        url: "http://10.10.0.50/stasiun",
        location: "Stasiun Pusat",
    },
    {
        id: 8,
        name: "Jembatan Merah",
        url: "http://10.10.0.50/jembatan-merah",
        location: "Jembatan Utama",
    },
    {
        id: 9,
        name: "Taman Kota",
        url: "http://10.10.0.50/taman-kota",
        location: "Taman Rekreasi",
    },
];

// Layout options
export type LayoutType = "1x1" | "2x2" | "3x3" | "4x4";

export const layoutOptions: { value: LayoutType; label: string; cols: number }[] = [
    { value: "1x1", label: "1 CCTV", cols: 1 },
    { value: "2x2", label: "4 CCTV", cols: 2 },
    { value: "3x3", label: "9 CCTV", cols: 3 },
    { value: "4x4", label: "16 CCTV", cols: 4 },
];
