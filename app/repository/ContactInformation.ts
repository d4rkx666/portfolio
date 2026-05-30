export function getContacts() {
  const email = process.env.REACT_APP_EMAIL || "";
  const linkedin = process.env.REACT_APP_LINKEDIN || "";
  const github = process.env.REACT_APP_GITHUB || "";

  return { email, linkedin, github};
}

export function getName() {
  const name = process.env.REACT_APP_NAME || "";

  return { name };
}