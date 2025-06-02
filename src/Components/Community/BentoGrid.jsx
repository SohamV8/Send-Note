import React from "react";
import clsx from "clsx";

export const cn = (...args) => clsx(...args);

// Grid Wrapper
export const BentoGrid = ({ className, children }) => {
  return (
    <section className="w-full px-6 py-20 md:px-12 lg:px-20 flex justify-center bg-[#0b1020]">
      <div
        className={cn(
          "grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[22rem]", // ⬅️ Height reduced
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

// Grid Item
export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#12172A] text-white shadow-md transition hover:shadow-xl",
        className
      )}
    >
      {/* Image */}
      {image && (
        <div className="w-full h-40 overflow-hidden"> {/* ⬅️ Slightly reduced image height */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Text Content */}
      <div className="flex-1">
      <div
  className="flex flex-col px-5 pt-4 pb-5"
  style={{ marginTop: "10px", marginLeft: "12px" , gap: "10px" }} // Adjusted margin and gap for better spacing
>

          <div className="flex items-center gap-2 text-white">
            {icon && <span className="text-lg">{icon}</span>}
            <h3 className="text-base font-semibold">{title}</h3>
          </div>
          <p className="text-sm text-neutral-300">{description}</p>
        </div>
      </div>

      {/* Border on Hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-white/20"></div>
    </div>
  );
};
