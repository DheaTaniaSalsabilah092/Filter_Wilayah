import { RegionData } from "../types/region";

export async function regionLoader(): Promise<RegionData> {
  const response = await fetch("/data/indonesia_regions.json");
  if (!response.ok) {
    throw new Response("Gagal memuat data wilayah", { status: response.status });
  }
  return response.json() as Promise<RegionData>;
}
