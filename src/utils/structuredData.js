export const SITE_URL = 'https://slbuildersltd.co.uk';

// Matches the LocalBusiness "@id" in index.html
export const BUSINESS_REF = { '@id': `${SITE_URL}/#business` };

// items: [{ name, path }], starting after "Home"
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      }),
    ),
  };
}
