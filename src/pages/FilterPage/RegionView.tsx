import React from "react";
import { Province, Regency, District } from "../../types/region";


//Icon Base

interface IconProps {
  size?: number;
  className?: string;
}

const IconBase = ({
  children,
  size = 22,
  className = "",
}: React.PropsWithChildren<IconProps>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

//Icons

const ArrowDownIcon = () => (
  <IconBase>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </IconBase>
);


//Types

interface RegionViewProps {
  province?: Province;
  regency?: Regency;
  district?: District;
}

// Component

export default function RegionView({
  province,
  regency,
  district,
}: RegionViewProps) {
  return (
    <main
      aria-live="polite"
      className="
        flex flex-1 flex-col items-center justify-center
        overflow-y-auto px-16 py-12
      "
    >
      {!province ? (
        /* Empty State */
        <div className="text-center">
          <div className="mb-4 select-none text-6xl">🗺️</div>
          <p className="text-base font-medium text-slate-400">
            Pilih provinsi untuk memulai
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {/* Province */}
          <section className="text-center">
            <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-500">
              Provinsi
            </p>
            <h1 className="text-[clamp(38px,5.5vw,64px)] font-extrabold leading-tight tracking-tight text-slate-900">
              {province.name}
            </h1>
          </section>

          {/* Regency */}
          {regency && (
            <>
              <div className="my-6 text-slate-300">
                <ArrowDownIcon />
              </div>

              <section className="text-center">
                <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-500">
                  Kota / Kabupaten
                </p>
                <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-tight tracking-tight text-slate-900">
                  {regency.name}
                </h2>
              </section>
            </>
          )}

          {/* District */}
          {district && (
            <>
              <div className="my-6 text-slate-300">
                <ArrowDownIcon />
              </div>

              <section className="text-center">
                <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-500">
                  Kecamatan
                </p>
                <h3 className="text-[clamp(26px,4vw,46px)] font-extrabold leading-tight tracking-tight text-slate-900">
                  {district.name}
                </h3>
              </section>
            </>
          )}
        </div>
      )}
    </main>
  );
}