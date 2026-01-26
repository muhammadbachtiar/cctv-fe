// CCTV Data Configuration
// Tambahkan atau edit daftar CCTV di sini

export interface CCTVItem {
    id: number;
    name: string;
    url: string;
    location?: string;
}

// Get CCTV domain from environment variable
const CCTV_DOMAIN = process.env.NEXT_PUBLIC_CCTV_DOMAIN;

export const cctvList: CCTVItem[] = [
    {
        id: 1,
        name: "Simpang Kepur 01",
        url: `${CCTV_DOMAIN}/simpang-kepur-01/`,
        location: "Simpang Kepur",
    },
    {
        id: 2,
        name: "Simpang Kepur PTZ",
        url: `${CCTV_DOMAIN}/simpang-kepur-ptz/`,
        location: "Simpang Kepur",
    },
    {
        id: 3,
        name: "Tugu Pahlawan 01",
        url: `${CCTV_DOMAIN}/tugu-pahlawan-01/`,
        location: "Kawasan Tugu Pahlawan",
    },
    {
        id: 4,
        name: "Tugu Pahlawan 02",
        url: `${CCTV_DOMAIN}/tugu-pahlawan-02/`,
        location: "Kawasan Tugu Pahlawan",
    },
    {
        id: 5,
        name: "Tugu Pahlawan 03",
        url: `${CCTV_DOMAIN}/tugu-pahlawan-03/`,
        location: "Kawasan Tugu Pahlawan",
    },
    {
        id: 6,
        name: "Jembatan Enim 2 PTZ",
        url: `${CCTV_DOMAIN}/jembatan-enim2-ptz/`,
        location: "Jembatan Enim 2",
    },
];

// Layout options
export type LayoutType = "1x1" | "2x2" | "3x3" | "4x4";

export interface LayoutOption {
    value: LayoutType;
    label: string;
    cols: number;
    responsiveClass: string; // Tailwind responsive grid classes
}

export const layoutOptions: LayoutOption[] = [
    {
        value: "1x1",
        label: "1 CCTV",
        cols: 1,
        responsiveClass: "grid-cols-1" // Always 1 column
    },
    {
        value: "2x2",
        label: "4 CCTV",
        cols: 2,
        responsiveClass: "grid-cols-1 md:grid-cols-2" // 1 col on mobile, 2 on tablet+
    },
    {
        value: "3x3",
        label: "9 CCTV",
        cols: 3,
        responsiveClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // 1 col mobile, 2 tablet, 3 desktop
    },
    {
        value: "4x4",
        label: "16 CCTV",
        cols: 4,
        responsiveClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // 2 cols mobile, 3 tablet, 4 desktop
    },
];
