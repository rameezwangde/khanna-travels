import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (event) => {
      dot.current?.style.setProperty("left", `${event.clientX}px`);
      dot.current?.style.setProperty("top", `${event.clientY}px`);
      ring.current?.animate(
        { left: `${event.clientX}px`, top: `${event.clientY}px` },
        { duration: 420, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    };
    const over = (event) => {
      if (event.target.closest("a, button, input, textarea, select, [data-cursor]")) ring.current?.classList.add("is-active");
    };
    const out = () => ring.current?.classList.remove("is-active");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <span ref={dot} className="cursor-dot" />
      <span ref={ring} className="cursor-ring" />
    </>
  );
}
