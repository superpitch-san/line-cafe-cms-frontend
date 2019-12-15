export const validateHTTPS = url => {
  try {
    return url ? new RegExp('https://').test(url.toLocaleLowerCase()) : false;
  } catch (error) {
    return false;
  }
};

export const validateHaveCookieName = name => {
  try {
    return name ? new RegExp(`${name}=`).test(document.cookie) : false;
  } catch (error) {
    return false;
  }
};
