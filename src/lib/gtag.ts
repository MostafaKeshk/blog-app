declare global {
  interface Window {
    gtag: any;
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface IEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

const event = ({ action, category, label, value }: IEvent) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

const gtag = { pageview, event, GA_TRACKING_ID };

export default gtag;
