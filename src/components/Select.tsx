import React from "react";

interface Option {
  id: number;
  name: string;
}

interface SelectProps {
  name: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function Select({
  name,
  label,
  icon,
  value,
  options,
  onChange,
  disabled = false,
  placeholder = "Pilih...",
}: SelectProps) {
  const hasValue = Boolean(value);

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5"
      >
        {label}
      </label>

      <div className="relative">
        <span
          className={`absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none transition-colors duration-150 ${
            hasValue ? "text-blue-500" : "text-slate-400"
          }`}
        >
          {icon}
        </span>

        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full pl-9 pr-8 py-2.5 text-sm rounded-lg border appearance-none
            transition-all duration-150 outline-none cursor-pointer
            ${disabled ? "cursor-not-allowed opacity-60 bg-slate-50 border-slate-200 text-slate-400" : ""}
            ${
              hasValue
                ? "border-blue-200 bg-blue-50 text-blue-800 font-medium"
                : !disabled
                  ? "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                  : ""
            }
            focus:ring-2 focus:ring-blue-100 focus:border-blue-400
          `}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.id} value={String(opt.id)}>
              {opt.name}
            </option>
          ))}
        </select>

        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>
  );
}
