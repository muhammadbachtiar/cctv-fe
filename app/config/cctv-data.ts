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
        url: "http://xxx/tugu-kopi/",
        location: "Kawasan Tugu Kopi",
    },
    {
        id: 2,
        name: "Tugu Adipura",
        url: "http://xxx/tugu-adipura/",
        location: "Kawasan Tugu Adipura",
    },
    {
        id: 3,
        name: "Simpang Kepur 01",
        url: "http://xxx/simpang-kepur-01/",
        location: "Simpang Kepur",
    },
    {
        id: 4,
        name: "Simpang Kepur PTZ",
        url: "http://xxx/simpang-kepur-ptz/",
        location: "Simpang Kepur",
    },
    {
        id: 5,
        name: "Tugu Pahlawan 01",
        url: "http://xxx/tugu-pahlawan-01/",
        location: "Kawasan Tugu Pahlawan",
    },
    {
        id: 6,
        name: "Tugu Pahlawan 02",
        url: "http://xxx/tugu-pahlawan-02/",
        location: "Kawasan Tugu Pahlawan",
    },
    {
        id: 7,
        name: "Tugu Pahlawan 03",
        url: "http://xxx/tugu-pahlawan-03/",
        location: "Kawasan Tugu Pahlawan",
    },
    {
        id: 8,
        name: "Jembatan Enim 2 PTZ",
        url: "http://xxx/jembatan-enim2-ptz/",
        location: "Jembatan Enim 2",
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
