import axios from "axios";
import type { Photo } from "../types/photo";

const myKey = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = myKey;
axios.defaults.params = {
  orientation: "landscape",
};

// Об'єкт відповіді
interface getPhotosResponse {
  photos: Photo[];
}

export const getPhotos = async (query: string): Promise<Photo[]> => {
  if (!query) return [];
  const response = await axios.get<getPhotosResponse>(`search?query=${query}`);
  return response.data.photos;
};
