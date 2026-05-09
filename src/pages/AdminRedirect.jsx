import { useEffect } from "react";

export default function AdminRedirect() {
  useEffect(() => {
    window.location.replace("/admin/index.html");
  }, []);

  return (
    <div className="grid min-h-screen place-items-center bg-navy px-6 text-center text-ivory">
      <div>
        <p className="font-serif text-4xl font-bold">Opening TinaCMS</p>
        <a className="mt-4 inline-block text-gold underline" href="/admin/index.html">
          Continue to CMS
        </a>
      </div>
    </div>
  );
}
