export const base_url = process.env.REACT_APP_DEPLOYED_BACKEND_URL || 'http://localhost:5001'
export const testAPI = `${base_url}/api/connection/test`
export const twtAuthTestAPI = `${base_url}/api/admin/check-middleware-auth`
export const adminLoginAPI = `${base_url}/api/admin/login`
export const adminSignupAPI = `${base_url}/api/admin/signup`
export const adminStocksAPI = `${base_url}/api/admin/stocks`;


export interface Logo {
    url: string;
  }

  export const CloudinaryUploadAPI: string =
  "https://api.cloudinary.com/v1_1/do2hqf8du/image/upload";