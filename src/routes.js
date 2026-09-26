// Single list of lazily loaded pages, shared by App.jsx and the prerender script
// (which uses `file` to add each page's CSS to its prerendered HTML).
export const pageRoutes = [
  { path: '/about', file: 'src/pages/about/About.jsx', load: () => import('./pages/about/About') },
  { path: '/services', file: 'src/pages/service/Services.jsx', load: () => import('./pages/service/Services') },
  { path: '/projects', file: 'src/pages/projects/Projects.jsx', load: () => import('./pages/projects/Projects') },
  { path: '/projects/kitchens', file: 'src/pages/projects/Kitchens.jsx', load: () => import('./pages/projects/Kitchens') },
  { path: '/projects/flooring', file: 'src/pages/projects/Flooring.jsx', load: () => import('./pages/projects/Flooring') },
  { path: '/projects/decking', file: 'src/pages/projects/Decking.jsx', load: () => import('./pages/projects/Decking') },
  { path: '/projects/staircase', file: 'src/pages/projects/Staircase.jsx', load: () => import('./pages/projects/Staircase') },
  { path: '/projects/custom', file: 'src/pages/projects/Custom.jsx', load: () => import('./pages/projects/Custom') },
  { path: '/cookie-policy', file: 'src/pages/cookie-policy/CookiePolicy.jsx', load: () => import('./pages/cookie-policy/CookiePolicy') },
  { path: '/privacy-policy', file: 'src/components/PrivacyPolicity/PrivacyPolicity.jsx', load: () => import('./components/PrivacyPolicity/PrivacyPolicity') },
  { path: '/leeds', file: 'src/pages/cities/Leeds.jsx', load: () => import('./pages/cities/Leeds') },
  { path: '/nottingham', file: 'src/pages/cities/Nottingham.jsx', load: () => import('./pages/cities/Nottingham') },
  { path: '/hucknall', file: 'src/pages/cities/Hucknall.jsx', load: () => import('./pages/cities/Hucknall') },
  { path: '/doncaster', file: 'src/pages/cities/Doncaster.jsx', load: () => import('./pages/cities/Doncaster') },
  { path: '/lincolnshire', file: 'src/pages/cities/Lincolnshire.jsx', load: () => import('./pages/cities/Lincolnshire') },
  { path: '/leicestershire', file: 'src/pages/cities/Leicestershire.jsx', load: () => import('./pages/cities/Leicestershire') },
  { path: '*', file: 'src/pages/not-found/NotFound.jsx', load: () => import('./pages/not-found/NotFound') },
];
