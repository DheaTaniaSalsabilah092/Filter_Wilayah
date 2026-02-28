# Filter Wilayah — Frontend Assessment

Halaman filter wilayah Indonesia berbasis React + React Router (data mode) + Tailwind CSS.

---

## Demo

> Pilih Provinsi → Kota/Kabupaten otomatis terisi → Pilih Kota/Kabupaten → Kecamatan otomatis terisi.
> Filter tetap tersimpan meski browser di-refresh (disimpan di URL search params).

---

## Fitur

- Filter wilayah bertingkat: **Provinsi → Kota/Kabupaten → Kecamatan**
- Breadcrumb dinamis mengikuti filter yang aktif (`class="breadcrumb"`)
- Konten utama menggunakan tag `<main>`
- State filter tersimpan di URL (`?province=1&regency=2&district=3`) — tidak hilang saat refresh
- Tombol **Reset** mengembalikan semua filter ke kondisi awal
- Data wilayah dimuat via **data loader** React Router (`fetch('/data/indonesia_regions.json')`)

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 (data mode) |
| Styling | Tailwind CSS v3 |
| Bahasa | TypeScript |
| Build Tool | Vite |

---

## Struktur Folder

```
src/
├── app/
│   ├── router.tsx          # createBrowserRouter + route loader
│   └── loader.ts           # fetch('/data/indonesia_regions.json')
│
├── pages/
│   └── FilterPage/
│       ├── index.tsx       # Orkestrator: useLoaderData + useRegionFilter
│       ├── FilterForm.tsx  # Sidebar: 3 combobox (province/regency/district) + Reset
│       ├── Breadcrumb.tsx  # Nav breadcrumb (class="breadcrumb")
│       └── RegionView.tsx  # Konten utama (<main>)
│
├── components/
│   └── Select.tsx          # Reusable combobox component
│
├── hooks/
│   └── useRegionFilter.ts  # Logik filter + baca/tulis URL search params
│
├── utils/
│   ├── region.ts           # Helper: getRegenciesByProvince, getDistrictsByRegency, dll
│   └── query.ts            # Helper: buildParams (URLSearchParams)
│
├── types/
│   └── region.ts           # Interface: Province, Regency, District, RegionData
│
├── styles/
│   └── globals.css         # Tailwind base + semua komponen class (BEM)
│
├── data/
│   └── indonesia_regions.json
│
└── main.tsx                # Entry point: RouterProvider
```

---

## Struktur Data

Data wilayah diambil dari `public/data/indonesia_regions.json` dengan struktur:

```json
{
  "provinces": [
    { "id": 1, "name": "Kepulauan Riau" }
  ],
  "regencies": [
    { "id": 1, "name": "Kota Batam", "province_id": 1 }
  ],
  "districts": [
    { "id": 1, "name": "Batam Kota", "regency_id": 1 }
  ]
}
```

---

## Name Attribute Combobox

| Combobox | `name` |
|---|---|
| Provinsi | `province` |
| Kota/Kabupaten | `regency` |
| Kecamatan | `district` |

---

## Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173)

### 3. Build untuk production

```bash
npm run build
```




## Cara Kerja Filter

```
User pilih Provinsi
  → handleProvinceChange() di useRegionFilter
    → setSearchParams({ province: id })
      → URL berubah: /?province=1
        → filteredRegencies dicompute ulang
          → Combobox Kota/Kabupaten terisi
```
