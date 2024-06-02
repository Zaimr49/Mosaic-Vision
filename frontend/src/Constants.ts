export const base_url = process.env.REACT_APP_DEPLOYED_BACKEND_URL || 'http://localhost:5001'
export const testAPI = `${base_url}/api/connection/test`

export interface Logo {
    url: string;
  }