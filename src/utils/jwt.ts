const JWT_SECRET = "gomata-secret-key-2025-super-secure";

function str2ab(str: string) {
  const buf = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
}

function base64url(buffer: ArrayBuffer) {
  const binary = String.fromCharCode(...new Uint8Array(buffer));
  const base64 = btoa(binary);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export async function signJwt(payload: any): Promise<string> {
  const header = { alg: "HS256", typ: "JWT" };
  const base64Header = btoa(JSON.stringify(header)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  const base64Payload = btoa(JSON.stringify(payload)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

  const key = await crypto.subtle.importKey(
    "raw",
    str2ab(JWT_SECRET),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    str2ab(`${base64Header}.${base64Payload}`)
  );

  return `${base64Header}.${base64Payload}.${base64url(signature)}`;
}

export async function verifyJwt(token: string): Promise<any | null> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [base64Header, base64Payload, signature] = parts;

    const key = await crypto.subtle.importKey(
      "raw",
      str2ab(JWT_SECRET),
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["verify"]
    );

    const sigBinary = atob(signature.replace(/-/g, "+").replace(/_/g, "/"));
    const sigBuffer = new Uint8Array(sigBinary.length);
    for (let i = 0; i < sigBinary.length; i++) {
      sigBuffer[i] = sigBinary.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBuffer,
      str2ab(`${base64Header}.${base64Payload}`)
    );

    if (!isValid) return null;

    const payload = JSON.parse(atob(base64Payload.replace(/-/g, "+").replace(/_/g, "/")));
    if (payload.exp && Date.now() > payload.exp) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
