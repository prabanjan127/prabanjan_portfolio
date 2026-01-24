export class FormatUtils {
  /**
   * Formats a number with leading zeros
   * @param num - Number to format
   * @param length - Desired length (default: 2)
   * @returns Formatted string
   */
  static formatNumber(num: number, length: number = 2): string {
    return num.toString().padStart(length, '0');
  }
}
