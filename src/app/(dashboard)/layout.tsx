import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (

        <div className=" flex h-full">
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default layout;