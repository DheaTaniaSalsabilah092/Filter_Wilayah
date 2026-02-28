import { useLoaderData } from "react-router-dom";
import { RegionData } from "../../types/region";
import { useRegionFilter } from "../../hooks/useRegionFilter";
import FilterForm from "./FilterForm";
import Breadcrumb from "./Breadcrumb";
import RegionView from "./RegionView";

export default function FilterPage() {
  const data = useLoaderData() as RegionData;

  const {
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
  } = useRegionFilter(data);

  const breadcrumbItems = [
    { label: "Indonesia" },
    ...(selectedProvince
      ? [{ label: selectedProvince.name, isActive: !selectedRegency }]
      : []),
    ...(selectedRegency
      ? [{ label: selectedRegency.name, isActive: !selectedDistrict }]
      : []),
    ...(selectedDistrict
      ? [{ label: selectedDistrict.name, isActive: true }]
      : []),
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <FilterForm
        provinces={data.provinces}
        regencies={filteredRegencies}
        districts={filteredDistricts}
        selectedProvince={filter.province}
        selectedRegency={filter.regency}
        selectedDistrict={filter.district}
        onProvinceChange={handleProvinceChange}
        onRegencyChange={handleRegencyChange}
        onDistrictChange={handleDistrictChange}
        onReset={handleReset}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Breadcrumb items={breadcrumbItems} />


        <RegionView
          province={selectedProvince}
          regency={selectedRegency}
          district={selectedDistrict}
        />
      </div>
    </div>
  );
}
