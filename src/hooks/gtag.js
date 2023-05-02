export const pageview = () => {
  window.gtag('config', G - PRHF3PFH44, {
    page_path: url,
  })
}
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
