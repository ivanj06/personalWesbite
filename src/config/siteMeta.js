export const SITE_NAME = 'Ivan Jauregui';
export const SITE_TAGLINE = 'Electrical & Computer Engineer';
export const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const DEFAULT_DESCRIPTION =
  'Portfolio of Ivan Jauregui — ECE student at Santa Clara University with experience in AI/ML, AWS, hackathons, and technical leadership.';

/** Production site URL (no trailing slash). Set REACT_APP_SITE_URL in .env for correct Open Graph previews. */
export const SITE_URL =
  process.env.REACT_APP_SITE_URL?.replace(/\/$/, '') ||
  'https://www.ivanjauregui.com';

export const OG_IMAGE_PATH = '/headshot.jpg';

export const ROUTE_META = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION
  },
  '/projects': {
    title: `Projects — ${SITE_NAME}`,
    description: 'Hackathon and hardware projects — AI/ML, AWS, OpenCV, YOLO, and embedded systems.'
  },
  '/certifications': {
    title: `Certifications — ${SITE_NAME}`,
    description: 'Professional certifications including HPE, CompTIA ITF+, and CodePath.'
  },
  '/leadership': {
    title: `Leadership — ${SITE_NAME}`,
    description: 'Leadership experience at Hewlett Packard Enterprise and SHPE.'
  },
  '/work': {
    title: `Work History — ${SITE_NAME}`,
    description: 'Work and professional experience.'
  },
  '/hobbies': {
    title: `Hobbies — ${SITE_NAME}`,
    description: 'Swimming, drone photography, ukulele, and hiking.'
  }
};

export function getRouteMeta(pathname) {
  return ROUTE_META[pathname] ?? ROUTE_META['/'];
}

export function absoluteUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
