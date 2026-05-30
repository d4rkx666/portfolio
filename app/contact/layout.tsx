import { getContacts } from "../repository/ContactInformation";
import ContactPage from "./ContactPage";

export default function RootLayout() {
   const {github, linkedin, email} = getContacts();
   return (
      <ContactPage github={github} email={email} linkedin={linkedin}/>
   );
}