import { afi, getHeaders } from "./axios-lib";

export const getBranches = async (data) => {
  const response = await afi.get(
    `/restaurant?page=1&limit=10&pagination=true&sortBy=_id&sortDirection=-1`,
    {
      headers: getHeaders(),
    }
  );

  if (response) {
    return response.data;
  }
};
