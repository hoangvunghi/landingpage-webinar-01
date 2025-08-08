// Google Apps Script - Code.gs
// Production Version - Clean code without debug logs

function doPost(e) {
  try {
    let data;
    
    // Handle different data formats
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        data = e.parameter;
      }
    } else if (e.parameter && e.parameter.data) {
      try {
        data = JSON.parse(e.parameter.data);
      } catch (parseError) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }
    
    return writeToSheet(data);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}

function doGet(e) {
  try {
    // Handle GET request for data submission
    if (e.parameter.action === 'write' && e.parameter.data) {
      const data = JSON.parse(e.parameter.data);
      return writeToSheet(data);
    }
    
    // Default response
    return ContentService
      .createTextOutput(JSON.stringify({
        message: 'Webinar Registration API is running',
        status: 'active'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return createErrorResponse(error);
  }
}

function writeToSheet(data) {
  try {
    // Validate required fields
    if (!data.fullName || !data.email || !data.phone) {
      throw new Error('Missing required fields: fullName, email, phone');
    }
    
    // Open the spreadsheet
    const spreadsheetId = '1wnGX7nyUJaPh1EhTjh7m9JKXqw3kEn5-fR5Q1z7XvP0';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getActiveSheet();
    
    // Ensure we have headers in the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Thời gian', 'Họ tên', 'Email', 'Số điện thoại', 'Nghề nghiệp']);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
    }
    
    // Prepare timestamp
    const timestamp = data.timestamp || Utilities.formatDate(
      new Date(), 
      'Asia/Ho_Chi_Minh', 
      'dd/MM/yyyy HH:mm:ss'
    );
    
    // Clean and format phone number
    let phoneNumber = String(data.phone || '').trim();
    
    // Remove any non-digit characters except + at the beginning
    phoneNumber = phoneNumber.replace(/[^\d+]/g, '');
    
    // Ensure Vietnamese phone format
    if (phoneNumber.startsWith('84')) {
      phoneNumber = '+' + phoneNumber;
    } else if (phoneNumber.startsWith('0')) {
      // Keep the leading 0 for Vietnamese numbers
      phoneNumber = phoneNumber;
    }
    
    // Add the row
    const newRow = sheet.getLastRow() + 1;
    
    // Set values individually to control formatting
    sheet.getRange(newRow, 1).setValue(timestamp);
    sheet.getRange(newRow, 2).setValue(String(data.fullName));
    sheet.getRange(newRow, 3).setValue(String(data.email));
    
    // Set phone number as text format to preserve leading zeros
    const phoneCell = sheet.getRange(newRow, 4);
    phoneCell.setNumberFormat('@STRING@'); // Force text format
    phoneCell.setValue(phoneNumber);
    
    sheet.getRange(newRow, 5).setValue(String(data.profession || 'Không có'));
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 5);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Đã lưu thông tin đăng ký thành công',
        rowNumber: newRow
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    throw error;
  }
}

function createErrorResponse(error) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: false,
      error: error.toString(),
      details: error.message
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
