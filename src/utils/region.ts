import { Province, Regency, District } from "../types/region";

export function getRegenciesByProvince(
  regencies: Regency[],
  provinceId: string,
): Regency[] {
  if (!provinceId) return [];
  return regencies.filter((r) => String(r.province_id) === provinceId);
}

export function getDistrictsByRegency(
  districts: District[],
  regencyId: string,
): District[] {
  if (!regencyId) return [];
  return districts.filter((d) => String(d.regency_id) === regencyId);
}

export function findProvince(
  provinces: Province[],
  id: string,
): Province | undefined {
  return provinces.find((p) => String(p.id) === id);
}

export function findRegency(
  regencies: Regency[],
  id: string,
): Regency | undefined {
  return regencies.find((r) => String(r.id) === id);
}

export function findDistrict(
  districts: District[],
  id: string,
): District | undefined {
  return districts.find((d) => String(d.id) === id);
}
