import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { absoluteUrl, getRouteMeta, OG_IMAGE_PATH } from '../config/siteMeta';

function setMetaTag(selector, attribute, name, content) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = getRouteMeta(pathname);
    const imageUrl = absoluteUrl(OG_IMAGE_PATH);
    const pageUrl = absoluteUrl(pathname === '/' ? '/' : pathname);

    document.title = title;

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
  }, [pathname]);

  return null;
};

export default PageMeta;
