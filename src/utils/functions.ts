/**
 * Return a url with the params replaced.
 */
export const generateUrl = (
  template: string,
  params: Record<string, string | number>
): string => {
  let url = template;

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(`:${key}`, String(params[key]));
    }
  }

  return url;
};
