export const SITE_NAME = "We Medica";

export function pageTitle(page) {
  return page ? `${page} | ${SITE_NAME}` : SITE_NAME;
}
