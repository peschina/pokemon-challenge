import { loading } from "../lib/store";

const HTTP =
  (method) =>
  async (endpoint, { headers = {}, body } = {}) => {
    try {
      loading.set(true);

      headers["Content-Type"] = "application/json";
      body = JSON.stringify(body);
      let url = `${env.API_URL}${endpoint}`;

      const res = await fetch(url, { method, headers, body });
      const result = await res.json();

      loading.set(false);

      if (!res.ok)
        throw {
          status: res.status,
          message: result,
        };

      return result;
    } catch (error) {
      loading.set(false);
      throw error;
    }
  };

export const GET = HTTP("GET");
export const POST = HTTP("POST");
export const PUT = HTTP("PUT");
export const PATCH = HTTP("PATCH");
export const DELETE = HTTP("DELETE");
