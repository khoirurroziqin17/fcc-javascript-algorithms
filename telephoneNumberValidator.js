function telephoneCheck(str) {
  const regex = [
    /^[0-9]{10}$/,
    /^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/,
    /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
    /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/,
    /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
    /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
    /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/,
    /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
    /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/,
  ];

  for (let i in regex) {
    if (regex[i].test(str)) {
      return true;
    }
  }

  return false;
}

telephoneCheck("(555) 555-5555");