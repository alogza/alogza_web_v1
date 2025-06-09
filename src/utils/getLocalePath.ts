export function getLocalePath(locale: string, path: string) {
    if (path.startsWith(`/${locale}/`) || path === `/${locale}`) return path;
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `/${locale}/${cleanPath}`.replace(/\/+$/, "");
} 