import MyButton from "@/components/ui/MyButton/MyButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import { IoIosCall } from "react-icons/io";

interface CallAndWhatsappProps {
  className?: string;
  direction?: "row" | "column";
  isShowTitle?: boolean;
}
const CallAndWhatsapp: FC<CallAndWhatsappProps> = ({
  className,
  direction,
  isShowTitle = true,
}) => {
  return (
    <div className={cn(className)}>
      {isShowTitle && (
        <p className="text-sm font-bold mb-2 ps-1">Call / Whatsapp</p>
      )}
      <div
        className={cn(
          "flex flex-wrap items-center gap-4",
          direction == "row" && "flex-row",
          direction == "column" && "flex-col"
        )}
      >
        {/* <div className="rounded-full border border-green-primary text-green-primary ps-2 pe-3 py-1 flex items-center gap-2">
          <div className="bg-green-primary p-2 text-white rounded-full">
            <IoIosCall />
          </div>{" "}
          0208 945 5711
        </div> */}
        {/* Clickable Call Button */}
        <a
          href="tel:02089455711"
          className="rounded-full border border-green-primary text-green-primary ps-2 pe-3 py-1 flex items-center gap-2"
        >
          <div className="bg-green-primary p-2 text-white rounded-full">
            <IoIosCall />
          </div>
          0208 945 5711
        </a>
        <div>
          <Link href={"/get-quote"}>
            <MyButton title="Get a Free Quote Today" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallAndWhatsapp;
