"use client";

export function StarField() {
  const stars = Array.from({ length: 120 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] animate-pulse rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 5}s`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
}