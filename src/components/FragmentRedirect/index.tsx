"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Questo è il file JSON che contiene tutti i redirect
import redirects from "./faq_redirects.json";

type Redirect = {
  source: string;
  destination: string;
};

export default function FragmentRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const path = hash.substring(1);

      redirects.map((element: Redirect) => {
        if (element.source == path) {
          router.push(element.destination);
        }
      });
    }
  }, [router]);

  return null;
}
