/** Central API URLs — use NEXT_PUBLIC_API_BASE_URL on Netlify for all endpoints. */

const PRODUCTION_API_BASE = "https://wemedica-api.onrender.com";
const LOCAL_API_BASE = "http://127.0.0.1:8000";

function trimSlash(url) {
  return url ? url.replace(/\/$/, "") : "";
}

export function getApiBase() {
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return trimSlash(process.env.NEXT_PUBLIC_API_BASE_URL);
  }
  const tokenUrl = process.env.NEXT_PUBLIC_API_URL_Token;
  if (tokenUrl) {
    return trimSlash(tokenUrl.replace(/\/api\/token\/?$/i, ""));
  }
  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_API_BASE;
  }
  return LOCAL_API_BASE;
}

function isLocalUrl(url) {
  return /localhost|127\.0\.0\.1/i.test(url || "");
}

function endpoint(envValue, path) {
  // In production, ignore accidental localhost URLs from build env
  if (envValue && !(process.env.NODE_ENV === "production" && isLocalUrl(envValue))) {
    return envValue;
  }
  return `${getApiBase()}${path}`;
}

export const api = {
  get base() {
    return getApiBase();
  },
  stroke: endpoint(process.env.NEXT_PUBLIC_API_URL_1, "/api/stroke/"),
  hepatitis: endpoint(process.env.NEXT_PUBLIC_API_URL_2, "/api/hepatitis/"),
  cancer: endpoint(process.env.NEXT_PUBLIC_API_URL_3, "/api/cancer/"),
  strokeCreate: endpoint(process.env.NEXT_PUBLIC_RESOURCE_URL_1, "/api/stroke/create/"),
  hepatitisCreate: endpoint(
    process.env.NEXT_PUBLIC_RESOURCE_URL_2,
    "/api/hepatitis/create/"
  ),
  cancerCreate: endpoint(process.env.NEXT_PUBLIC_RESOURCE_URL_3, "/api/cancer/create/"),
  token: endpoint(process.env.NEXT_PUBLIC_API_URL_Token, "/api/token/"),
  register: endpoint(process.env.NEXT_PUBLIC_API_URL_Register, "/api/register/"),
};
