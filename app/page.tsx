'use client';

import Home from "@/app/home/page";
import Script from "next/script";

export default function Page() {
  return (
    <div>
      <Home />
      <Script id="mixpanel-script">
          {`            
            window.onload = function() {
                let r = new URL(document.referrer || document.location.href);
                let q = location.search;
                q.length == 0 ? q = "?ref=" + r.hostname : q = q + "&ref=" + r.hostname;
                var url = "https://ops.dappfuse.com/web/t" + q;
                fetch(url, {credentials: 'include'});
            };
          `}
        </Script>
    </div>
  );
}
