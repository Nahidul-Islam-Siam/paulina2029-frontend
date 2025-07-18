import React from 'react';
import Image from 'next/image';

interface MainContentProps {
  activeTab: string;
  tabContent: {
    [key: string]: {
      title: string;
      content: React.ReactNode;
      image?: string;
    };
  };
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, tabContent }) => {
  const content = tabContent[activeTab];
  
  return (
    <div className="w-full md:w-[60%] flex flex-col gap-10 mt-6 md:mt-0 text-justify">
      <div className="animate-fadeIn">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-4 font-playfair leading-snug">
          {content.title}
        </h2>
        <div className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
          {content.content}
        </div>
        
        {content.image && (
          <Image
            src={content.image}
            alt="Siding example"
            className="w-full rounded-md my-4 object-cover h-auto"
            width={800}
            height={400}
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
};

export default MainContent;