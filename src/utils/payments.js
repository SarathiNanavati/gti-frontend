import { afi, getHeaders } from "./axios-lib";

export const getPayments = async (data) => {
  const response = await afi.get(
    `/payment-setup?restaurantId=63e48a66e250f39a0e0e1a47&page=1&limit=10&pagination=true&sortBy=_id&sortDirection=-1`,
    {
      headers: getHeaders(),
    }
  );

  if (response) {
    return response.data;
  }
};
