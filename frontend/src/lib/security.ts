// Security utility functions

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>\"']/g, "") // Remove dangerous characters
    .trim()
    .slice(0, 1000); // Limit length
}

/**
 * Validate phone number format
 */
export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ""));
}

/**
 * Validate WhatsApp URL
 */
export function validateWhatsAppUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return (
      urlObj.hostname === "wa.me" || urlObj.hostname === "api.whatsapp.com"
    );
  } catch {
    return false;
  }
}

/**
 * Rate limiting helper
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limit: number;
  private windowMs: number;

  constructor(limit: number = 10, windowMs: number = 60000) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];

    // Remove old requests outside the window
    const validRequests = requests.filter((time) => now - time < this.windowMs);

    if (validRequests.length >= this.limit) {
      return false;
    }

    validRequests.push(now);
    this.requests.set(identifier, validRequests);

    return true;
  }
}

export const searchRateLimiter = new RateLimiter(20, 60000); // 20 searches per minute

/**
 * Validate search query
 */
export function validateSearchQuery(query: string): string | null {
  if (!query || typeof query !== "string") {
    return null;
  }

  const sanitized = sanitizeInput(query);

  if (sanitized.length < 2 || sanitized.length > 100) {
    return null;
  }

  // Block SQL injection patterns
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)/i,
    /(\b(UNION|OR|AND)\s+\d+\s*=\s*\d+)/i,
    /(--|\/\*|\*\/)/,
    /(<script|javascript:|vbscript:|onload=|onerror=)/i,
  ];

  const hasSqlInjection = sqlPatterns.some((pattern) =>
    pattern.test(sanitized)
  );

  if (hasSqlInjection) {
    return null;
  }

  return sanitized;
}

/**
 * Content Security Policy nonce generator
 */
export function generateNonce(): string {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString(
    "base64"
  );
}

/**
 * Validate file upload (if needed in the future)
 */
export function validateFileUpload(file: File): boolean {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  const maxSize = 5 * 1024 * 1024; // 5MB

  return allowedTypes.includes(file.type) && file.size <= maxSize;
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Check if URL is safe for external links
 */
export function isSafeUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    const safeProtocols = ["http:", "https:", "tel:", "mailto:"];
    const allowedDomains = [
      "wa.me",
      "api.whatsapp.com",
      "google.com",
      "maps.google.com",
      "bahanbangunanstore.com",
    ];

    if (!safeProtocols.includes(urlObj.protocol)) {
      return false;
    }

    if (urlObj.protocol === "http:" || urlObj.protocol === "https:") {
      return allowedDomains.some(
        (domain) =>
          urlObj.hostname === domain || urlObj.hostname.endsWith("." + domain)
      );
    }

    return true;
  } catch {
    return false;
  }
}

const securityUtils = {
  sanitizeInput,
  validatePhoneNumber,
  validateWhatsAppUrl,
  validateSearchQuery,
  generateNonce,
  validateFileUpload,
  escapeHtml,
  isSafeUrl,
  searchRateLimiter,
};

export default securityUtils;
