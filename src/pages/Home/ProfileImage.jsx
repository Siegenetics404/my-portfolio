import { useRef, useEffect } from "react";
import profile from "../../assets/images/about/profile.png";
import profileHover from "../../assets/images/about/profile-hover.png";

// Mouse-tracking reveal: a soft trailing mask follows the cursor and
// uncovers the hover image underneath, wherever the mouse has been.
export default function ProfileImage() {
    const containerRef = useRef(null);
    const maskRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const trail = useRef(Array.from({ length: 10 }, () => ({ x: 0, y: 0 })));

    useEffect(() => {
        const move = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };
        window.addEventListener("mousemove", move);

        let frameId;
        const animate = () => {
            const speed = 0.15;
            trail.current.forEach((point, i) => {
                const target = i === 0 ? mouse.current : trail.current[i - 1];
                point.x += (target.x - point.x) * speed;
                point.y += (target.y - point.y) * speed;
            });
            if (maskRef.current) {
                const gradients = trail.current
                    .map((p, i) => {
                        const size = 110 - i * 8;
                        const opacity = 1 - i * 0.1;
                        return `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px, rgba(255,255,255,${opacity}) 20%, rgba(255,255,255,${opacity * 0.6}) 40%, transparent 70%)`;
                    })
                    .join(",");
                maskRef.current.style.maskImage = gradients;
                maskRef.current.style.webkitMaskImage = gradients;
            }
            frameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-64 md:w-48 md:h-auto overflow-hidden border border-neutral-200 shrink-0"
        >
            {/* Base image */}
            <img
                src={profile}
                alt="Cj Franco"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Hover image — only visible through the mouse-trail mask */}
            <div ref={maskRef} className="absolute inset-0 pointer-events-none">
                <img
                    src={profileHover}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}