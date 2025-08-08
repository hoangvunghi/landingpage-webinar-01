interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
}

interface GoogleSheetsResponse {
  success: boolean;
  message?: string;
  error?: string;
}

class GoogleSheetsService {
  private apiKey: string;
  private clientId: string;
  private spreadsheetId: string;
  private gapi: any = null;
  private isInitialized: boolean = false;

  constructor() {
    this.apiKey = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
    this.clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    this.spreadsheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID;
  }

  // Initialize Google API
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    return new Promise((resolve, reject) => {
      // Load Google API script if not already loaded
      if (!window.gapi) {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => {
          this.loadGapi().then(resolve).catch(reject);
        };
        script.onerror = () => reject(new Error('Failed to load Google API'));
        document.head.appendChild(script);
      } else {
        this.loadGapi().then(resolve).catch(reject);
      }
    });
  }

  private async loadGapi(): Promise<void> {
    return new Promise((resolve, reject) => {
      window.gapi.load('client', async () => {
        try {
          await window.gapi.client.init({
            apiKey: this.apiKey,
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
          });
          this.gapi = window.gapi;
          this.isInitialized = true;
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  // Write data to Google Sheets using Direct API (requires OAuth - currently disabled)
  async writeToSheet(data: RegistrationData): Promise<GoogleSheetsResponse> {
    // Note: This method requires OAuth 2.0, not just API key
    // For now, we'll return an error and rely on Apps Script method
    return {
      success: false,
      error: 'Direct API method requires OAuth 2.0 authentication. Use Apps Script method instead.'
    };
  }

  // Alternative method using Google Apps Script
  async writeViaAppsScript(data: RegistrationData): Promise<GoogleSheetsResponse> {
    try {
      const appsScriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!appsScriptUrl) {
        throw new Error('Google Apps Script URL not configured');
      }

      const timestamp = new Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const payload = {
        timestamp,
        fullName: data.fullName,
        email: data.email,
        phone: String(data.phone).replace(/\s/g, ''), // Đảm bảo phone là string và loại bỏ khoảng trắng
        profession: data.profession || 'Không có'
      };

      // Method 1: Try GET request with URL parameters (most reliable)
      try {
        const params = new URLSearchParams({
          action: 'write',
          data: JSON.stringify(payload)
        });
        
        const getResponse = await fetch(`${appsScriptUrl}?${params.toString()}`, {
          method: 'GET',
          redirect: 'follow'
        });

        if (getResponse.ok) {
          const result = await getResponse.json();
          if (result.success) {
            return {
              success: true,
              message: 'Đã ghi dữ liệu thành công'
            };
          }
        }
      } catch (getError) {
        // Fallback to next method
      }

      // Method 2: Try POST with JSON
      try {
        const jsonResponse = await fetch(appsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          redirect: 'follow'
        });

        if (jsonResponse.ok) {
          const result = await jsonResponse.json();
          if (result.success) {
            return {
              success: true,
              message: 'Đã ghi dữ liệu thành công'
            };
          }
        }
      } catch (jsonError) {
        // Fallback to next method
      }

      // Method 3: Fallback to POST with form data
      const formData = new FormData();
      formData.append('data', JSON.stringify(payload));

      const response = await fetch(appsScriptUrl, {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return {
          success: true,
          message: 'Đã ghi dữ liệu thành công'
        };
      } else {
        throw new Error(result.error || 'Unknown error from Apps Script');
      }

    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Có lỗi xảy ra khi ghi dữ liệu'
      };
    }
  }
}

// Export singleton instance
export const googleSheetsService = new GoogleSheetsService();

// Export types
export type { RegistrationData, GoogleSheetsResponse };
