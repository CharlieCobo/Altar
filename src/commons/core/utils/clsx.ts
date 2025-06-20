export const clsx = (defaultClasses = '', classes?: Record<string, boolean>) => {
  let conditionalClasses;

  if (classes) {
    conditionalClasses = Object.entries(classes)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(' ');
  }

  return `${defaultClasses} ${conditionalClasses}`.trim();
};
