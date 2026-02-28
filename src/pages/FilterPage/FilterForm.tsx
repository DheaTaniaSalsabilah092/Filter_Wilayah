import React from "react";
import Select from "../../components/Select";
import { Province, Regency, District } from "../../types/region";



interface IconProps {
  size?: number;
  className?: string;
}

const IconBase = ({
  children,
  size = 15,
  className = "",
}: React.PropsWithChildren<IconProps>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);


// Icons

const GlobeIcon = () => (
  <IconBase>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconBase>
);

const BuildingIcon = () => (
  <IconBase>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </IconBase>
);

const PinIcon = () => (
  <IconBase>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

const ResetIcon = () => (
  <IconBase size={13}>
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-3.6" />
  </IconBase>
);


// Types

interface FilterFormProps {
  provinces: Province[];
  regencies: Regency[];
  districts: District[];
  selectedProvince: string;
  selectedRegency: string;
  selectedDistrict: string;
  onProvinceChange: (value: string) => void;
  onRegencyChange: (value: string) => void;
  onDistrictChange: (value: string) => void;
  onReset: () => void;
}

// Component

export default function FilterForm({
  provinces,
  regencies,
  districts,
  selectedProvince,
  selectedRegency,
  selectedDistrict,
  onProvinceChange,
  onRegencyChange,
  onDistrictChange,
  onReset,
}: FilterFormProps) {
  return (
    <aside
      aria-label="Filter Wilayah"
      className="
        z-10 flex h-full w-[256px] min-w-[256px] flex-col
        border-r border-slate-200 bg-white
        shadow-[2px_0_12px_rgba(0,0,0,0.05)]
      "
    >
      {/* Header */}
      <header className="flex items-center gap-2.5 border-b border-slate-100 px-5 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <GlobeIcon />
        </div>
        <span className="text-[13.5px] font-semibold text-slate-800">
          Frontend Assessment
        </span>
      </header>

      {/* Filters */}
      <div className="flex-1 p-5">
        <p className="mb-4 text-[9.5px] font-bold uppercase tracking-widest text-slate-400">
          Filter Wilayah
        </p>

        <Select
          name="province"
          label="Provinsi"
          icon={<GlobeIcon />}
          value={selectedProvince}
          options={provinces}
          onChange={onProvinceChange}
          placeholder="Pilih Provinsi"
        />

        <Select
          name="regency"
          label="Kota / Kabupaten"
          icon={<BuildingIcon />}
          value={selectedRegency}
          options={regencies}
          onChange={onRegencyChange}
          disabled={!selectedProvince}
          placeholder={
            selectedProvince
              ? "Pilih Kota / Kabupaten"
              : "— pilih provinsi dulu —"
          }
        />

        <Select
          name="district"
          label="Kecamatan"
          icon={<PinIcon />}
          value={selectedDistrict}
          options={districts}
          onChange={onDistrictChange}
          disabled={!selectedRegency}
          placeholder={
            selectedRegency
              ? "Pilih Kecamatan"
              : "— pilih kota dulu —"
          }
        />

        {/* Reset */}
        <button
          type="button"
          onClick={onReset}
          className="
            mt-3 flex w-full items-center justify-center gap-1.5
            rounded-lg border border-slate-200 bg-white
            px-4 py-2.5 text-[11.5px] font-semibold
            uppercase tracking-wide text-slate-500
            transition hover:border-slate-300 hover:bg-slate-50
          "
        >
          <ResetIcon />
          Reset
        </button>
      </div>
    </aside>
  );
}