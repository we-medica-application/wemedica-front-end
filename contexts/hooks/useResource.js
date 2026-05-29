import axios from "axios";
import useSWR from "swr";
import { useAuth } from "../auth";
import { api } from "../../lib/api";

function getTokens() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("Tokens");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function authHeaders(tokens) {
  if (!tokens?.access) return {};
  return { Authorization: `Bearer ${tokens.access}` };
}

export async function postResource(url, data, { auth = true } = {}) {
  const tokens = auth ? getTokens() : null;
  if (auth && !tokens?.access) {
    throw new Error("You must be logged in to submit this form.");
  }
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(tokens),
    },
  });
  return response.data;
}

async function fetchResource(key) {
  const url = Array.isArray(key) ? key[0] : key;
  const tokens = getTokens();
  if (!tokens?.access || !url) {
    return;
  }
  const response = await axios.get(url, { headers: authHeaders(tokens) });
  return response.data;
}

export default function useResource() {
  const { tokens: authTokens } = useAuth();
  const tokens = authTokens || getTokens();

  const { data: stroke_data, error: error1 } = useSWR(
    tokens?.access ? [api.stroke, tokens.access] : null,
    fetchResource
  );
  const { data: hepatitis_data, error: error2 } = useSWR(
    tokens?.access ? [api.hepatitis, tokens.access] : null,
    fetchResource
  );
  const { data: cancer_data, error: error3 } = useSWR(
    tokens?.access ? [api.cancer, tokens.access] : null,
    fetchResource
  );

  async function createResource(info, url, options = {}) {
    const { auth = true } = options;
    return postResource(url, info, { auth });
  }

  return {
    stroke_resources: stroke_data,
    hepatitis_resources: hepatitis_data,
    cancer_resources: cancer_data,
    error1,
    error2,
    error3,
    loading:
      Boolean(tokens?.access) &&
      ((!error1 && !stroke_data) ||
        (!error2 && !hepatitis_data) ||
        (!error3 && !cancer_data)),
    createResource,
  };
}
