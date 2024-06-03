export const base_url = process.env.REACT_APP_DEPLOYED_BACKEND_URL || 'http://localhost:5001'
export const testAPI = `${base_url}/api/connection/test`
export const twtAuthTestAPI = `${base_url}/api/admin/check-middleware-auth`

export interface Logo {
    url: string;
  }