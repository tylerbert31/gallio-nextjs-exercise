// Server Component ni gals
// ang client component ky naay "use client";

import Image from "next/image";
import Contacts from "@/lib/models/contacts_model";
import { unstable_noStore as disableCache } from "next/cache";

export default async function Home() {
  disableCache(); // to avoid being a static page
  const contacts = await Contacts.findAll();
  return (
    <>
      <div>{JSON.stringify(contacts)}</div>
    </>
  );
}
