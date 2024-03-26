export const apiHeaders = (token) => {
  const headers = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return headers;
};
