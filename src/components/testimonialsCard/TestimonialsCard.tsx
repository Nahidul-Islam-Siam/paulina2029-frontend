"use client"

import { Ban, Check, Quote, Star, Trash } from "lucide-react";
import {   useDeleteFeedbackStatusMutation, useUpdateFeedbackStatusMutation } from "../../redux/api/feedbacksApi";
import { id, TestimonialProps } from "@/interface/globalType";
import { toast } from "sonner";


export const TestimonialsCard = ({ data, idx, slidesToShow, isAdmin }: { data: TestimonialProps & id, isAdmin?: boolean, slidesToShow?: number, idx: number }) => {

    const [updateStatus, { error: PatchError }] = useUpdateFeedbackStatusMutation()
    const [deleteStatus, { error: DeleteError }] = useDeleteFeedbackStatusMutation()

    const handleStatusChange = async (actionName: string) => {
        // console.log(`${actionName} button clicked`);

        const res = await updateStatus(actionName).unwrap()
        console.log(res);
        
        // console.log(res);
        if (res) {
            toast.success(res?.message)
        }
    };

    const handleDelete = async (actionName: string) => {
        // console.log(`${actionName} button clicked`);
        const res = await deleteStatus(actionName).unwrap()
        if (res) {
            toast.success(res?.message)
        }
    };

    if (DeleteError) {
        toast.success("Deleted error")
    }
    if (PatchError) {
        toast.success("Status changed error")
    }
    return (
        <div
            key={idx}
            className={`flex-shrink-0 px-3  lg:px-4 py-2 ${slidesToShow === 3 ? 'w-1/3 h-[250px] md:h-[300px] ' : slidesToShow === 2 ? 'w-1/2 ' : 'w-full'
                }`}
        >
            <div className="relative flex flex-col p-2 md:p-6 rounded-xl border h-full">
                <div className="relative z-10 flex-1 overflow-hidden">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div>
                                    <h3 className="text-base md:text-2xl font-bold text-text_title font-serif">{data.name}</h3>
                                </div>
                            </div>

                            <div className="flex mb-4 gap-1">
                                {[...Array(data.rating)].map((_, i) => (
                                    <Star key={i} className="fill-yellow-400 stroke-none" />
                                ))}
                            </div>
                        </div>
                        <Quote className="w-10 h-10 text-pink-100" />
                    </div>
                    {
                        isAdmin && <p className="text-text_default mb-6 text-sm md:text-base flex-1 font-semibold">{data.email}</p>
                    }

                    <p className="text-text_default mb-6 text-sm md:text-base ">&quot;{data.message}&quot;</p>
                </div>
                {
                    isAdmin && (
                        <div className=" flex flex-wrap items-center justify-start gap-3">
                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(data._id)}
                                className="flex items-center md:px-3 px-2  py-2 bg-[#990012] text-white rounded-lg"
                            >
                                <Trash className="mr-1 w-4 h-4" /> <span>Delete</span>
                            </button>
                            {
                                data.status == "published" ? <button
                                    onClick={() => handleStatusChange(data._id)}
                                    className="flex items-center md:px-3 px-2  py-2 bg-[#F67280] text-white rounded-lg"
                                >
                                    <Ban className="mr-1 w-4 h-4" /> <span>UnPublish</span>
                                </button> : <button
                                    onClick={() => handleStatusChange(data._id)}
                                    className="flex items-center md:px-3 px-2  py-2 bg-[#829F82] text-white rounded-lg"
                                >
                                    <Check className="mr-1 w-4 h-4" /> <span>Publish</span>
                                </button>
                            }
                        </div>
                    )
                }
            </div>

        </div>
    )
}