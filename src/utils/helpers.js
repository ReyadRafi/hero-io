export const fmtDownloads = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
};

export const fmtReviews = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
};

export const getInstalled = () => {
  try {
    return JSON.parse(localStorage.getItem("hero_installed") || "[]");
  } catch {
    return [];
  }
};

export const saveInstalled = (arr) => {
  localStorage.setItem("hero_installed", JSON.stringify(arr));
};
