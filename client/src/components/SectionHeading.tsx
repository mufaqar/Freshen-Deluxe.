import React from "react";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center">
      <h6 className="mb-4 text-ring text-[96px] font-bold opacity-20 nautigal_font">
        {subtitle}
      </h6>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 mt-[-60px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
