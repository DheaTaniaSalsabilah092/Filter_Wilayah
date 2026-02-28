interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex min-h-[46px] items-center gap-1.5 border-b border-slate-200 bg-white px-8 py-3.5 text-[13px]"
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 && (
            <span className="select-none text-sm text-slate-300">›</span>
          )}
          <span
            aria-current={item.isActive ? "page" : undefined}
            className={
              item.isActive
                ? "font-semibold text-blue-700"
                : "font-normal text-slate-500"
            }
          >
            {item.label}
          </span>
        </span>
      ))}
    </nav>
  );
}