export class Logger {
  static info(message, data = {}) {
    console.log(`[INFO] ${message}`, data);
  }

  static error(message, error = {}) {
    console.error(`[ERROR] ${message}`, error);
  }

  static warn(message, data = {}) {
    console.warn(`[WARN] ${message}`, data);
  }

  static debug(message, data = {}) {
    console.log(`[DEBUG] ${message}`, data);
  }
}