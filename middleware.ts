import { NextResponse, type NextRequest } from "next/server";

const WWW_HOST = "www.abogadojosephrivera.com";
const APEX_HOST = "abogadojosephrivera.com";

/**
 * Consolida www-strip + trailing-slash-strip en un solo 308, en vez de dos
 * redirects encadenados (uno por next.config.ts redirects(), otro por el
 * trailingSlash:false por defecto de Next) -- eso era lo que Search Console
 * reportaba como "Página con redirección" en varias URLs. El upgrade
 * http→https en sí ocurre antes, a nivel de plataforma en Vercel, así que
 * no es controlable desde aquí.
 */
export function middleware(request: NextRequest) {
  // Se reconstruye con un URL plano (no NextURL.clone()): mutar .pathname
  // sobre el clon de nextUrl no siempre se refleja en el Location final
  // cuando el path original traía trailing slash.
  const target = new URL(request.nextUrl.href);
  let changed = false;

  // Se lee el header Host directamente (no nextUrl.hostname): en self-hosting
  // (next start) nextUrl.hostname puede no reflejar el Host real de la
  // petición, a diferencia del edge de Vercel en producción.
  const host = request.headers.get("host");
  if (host === WWW_HOST) {
    target.hostname = APEX_HOST;
    changed = true;
  }

  if (target.pathname !== "/" && target.pathname.endsWith("/")) {
    target.pathname = target.pathname.slice(0, -1);
    changed = true;
  }

  if (changed) {
    return NextResponse.redirect(target, 308);
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
