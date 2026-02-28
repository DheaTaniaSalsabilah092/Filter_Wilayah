import { RegionFilter } from "../types/region";

export function getFilterFromParams(params: URLSearchParams): RegionFilter {
  return {
    province: params.get("province") ?? "",
    regency: params.get("regency") ?? "",
    district: params.get("district") ?? "",
  };
}

export function buildParams(filter: Partial<RegionFilter>): URLSearchParams {
  const params = new URLSearchParams();
  if (filter.province) params.set("province", filter.province);
  if (filter.regency) params.set("regency", filter.regency);
  if (filter.district) params.set("district", filter.district);
  return params;
}
