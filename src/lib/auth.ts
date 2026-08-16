export const SESSION_COOKIE_NAME = "atk_session";

export async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidSession(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  const appPassword = process.env.APP_PASSWORD;
  if (!appPassword) return false;
  const expected = await sha256Hex(appPassword);
  return cookieValue === expected;
}
