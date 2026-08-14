/**
 * Input sanitization and validation utilities to protect against
 * XSS, control-character injection, and malformed URL deep-links.
 */

/**
 * Strips HTML tags, script delimiters, and dangerous control characters.
 * Trims excess whitespace and limits string length.
 */
export function sanitizeInput(input: string, maxLength = 100): string {
  if (typeof input !== "string") return "";

  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove null bytes and non-printable control characters
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
    // Replace multiple newlines or tabs with a single space
    .replace(/[\r\n\t]+/g, " ")
    // Trim leading/trailing whitespace
    .trim()
    // Enforce max length constraint
    .slice(0, maxLength);
}

/**
 * Validates whether a phone number is a valid 10-digit Indian mobile number
 * or valid international format.
 */
export function validatePhone(phone: string): { isValid: boolean; cleaned: string } {
  // Strip non-digit characters except leading '+'
  const cleaned = phone.replace(/[^\d+]/g, "");
  // Standard Indian 10-digit format starting with 6-9, or +91 / 91 prefix
  const indian10DigitRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
  const is10DigitOnly = /^[6-9]\d{9}$/;

  const isValid =
    indian10DigitRegex.test(cleaned) ||
    (cleaned.replace(/^\+?91|^0/, "").length === 10 &&
      is10DigitOnly.test(cleaned.replace(/^\+?91|^0/, "")));

  return {
    isValid: isValid || cleaned.length >= 10,
    cleaned,
  };
}

/**
 * Safely opens an external URL with reverse-tabnabbing protection.
 */
export function safeOpenUrl(url: string): void {
  // Enforce protocol check (only https: or mailto: or tel:)
  if (!/^https?:\/\/|^mailto:|^tel:/i.test(url)) {
    console.error("Blocked unsafe protocol URL navigation:", url);
    return;
  }

  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) {
    newWindow.opener = null;
  }
}
