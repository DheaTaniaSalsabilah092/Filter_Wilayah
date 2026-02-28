import { useSearchParams } from "react-router-dom";
import { RegionData, RegionFilter } from "../types/region";
import {
  getRegenciesByProvince,
  getDistrictsByRegency,
  findProvince,
  findRegency,
  findDistrict,
} from "../utils/region";
import { buildParams } from "../utils/query";

export function useRegionFilter(data: RegionData) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter: RegionFilter = {
    province: searchParams.get("province") ?? "",
    regency: searchParams.get("regency") ?? "",
    district: searchParams.get("district") ?? "",
  };

  const filteredRegencies = getRegenciesByProvince(
    data.regencies,
    filter.province,
  );
  const filteredDistricts = getDistrictsByRegency(
    data.districts,
    filter.regency,
  );

  const selectedProvince = findProvince(data.provinces, filter.province);
  const selectedRegency = findRegency(data.regencies, filter.regency);
  const selectedDistrict = findDistrict(data.districts, filter.district);

  // Handler
  function handleProvinceChange(value: string) {
    setSearchParams(buildParams({ province: value }));
  }

  function handleRegencyChange(value: string) {
    setSearchParams(buildParams({ province: filter.province, regency: value }));
  }

  function handleDistrictChange(value: string) {
    setSearchParams(
      buildParams({
        province: filter.province,
        regency: filter.regency,
        district: value,
      }),
    );
  }

  function handleReset() {
    setSearchParams(new URLSearchParams());
  }

  return {
    filter,
    filteredRegencies,
    filteredDistricts,
    selectedProvince,
    selectedRegency,
    selectedDistrict,
    handleProvinceChange,
    handleRegencyChange,
    handleDistrictChange,
    handleReset,
  };
}
