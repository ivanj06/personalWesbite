import { useEffect } from 'react';

/**
 * Loads Plausible Analytics when REACT_APP_PLAUSIBLE_DOMAIN is set.
 * Sign up at https://plausible.io and add your domain to .env (see .env.example).
 */
const PlausibleAnalytics = () => {
  useEffect(() => {
    const domain = process.env.REACT_APP_PLAUSIBLE_DOMAIN?.trim();
    if (!domain || document.querySelector('script[data-plausible]')) {
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://plausible.io/js/script.js';
    script.setAttribute('data-domain', domain);
    script.setAttribute('data-plausible', 'true');
    document.head.appendChild(script);
  }, []);

  return null;
};

export default PlausibleAnalytics;
