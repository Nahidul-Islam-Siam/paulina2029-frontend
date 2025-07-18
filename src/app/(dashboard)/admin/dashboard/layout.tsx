import DashBoardNav from "@/components/dashboard/dashBoardNav/DashBoardNav";
import React, { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className=" flex h-full">
            <div className="sticky top-0 h-screen z-40 ">
                <DashBoardNav />
            </div>
            <div className="w-full overflow-hidden p-4">
                {children}
            </div>
        </div>
    );
};

export default layout;