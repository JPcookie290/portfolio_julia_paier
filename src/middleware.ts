import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",                 // root (so it can redirect to /en etc.)
    "/(en|de|it)/:path*" // all locale routes
  ]
};
