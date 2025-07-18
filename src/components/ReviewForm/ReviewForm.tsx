// eslint-disable-next-line @typescript-eslint/no-explicit-any

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useCreateFeedbackMutation } from "@/redux/api/feedbacksApi"
import { toast } from "sonner"

type FormData = {
  name: string
  title: string
  email: string
  comment: string // will be renamed to message in API payload
  
}

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [createFeedback, { isLoading }] = useCreateFeedbackMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const payload = {
      name: data.name,
      title: data.title,
      email: data.email,
      message: data.comment, // backend expects 'message'
      rating: rating,
      status: "unpublished", // default status
    }

    try {
      const res = await createFeedback(payload).unwrap()
      toast.success(res?.message ||"Review submitted successfully!")
      reset()
      setRating(0)
    } catch (error:any) {
      toast.error(error?.data?.message || error?.message || "Submission failed.")
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto md:my-20 my-12 rounded-[24px] border-[4px] border-[#E6F4EC] bg-[#FFF] shadow-[0px_4px_40px_0px_rgba(83,_83,_83,_0.06)]">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Leave a Review About Our Service</CardTitle>
        <p className="text-sm text-muted-foreground">Your email address will not be published</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm">Your rating:</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`h-5 w-5 ${
                      star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <Input
            placeholder="Name"
            className="bg-gray-100 border-0"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-sm text-red-500">Name is required</p>}

          <Input
            placeholder="Title"
            className="bg-gray-100 border-0"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-sm text-red-500">Title is required</p>}

          <Input
            type="email"
            placeholder="Email Address"
            className="bg-gray-100 border-0"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-sm text-red-500">Email is required</p>}

          <Textarea
            placeholder="Write your comment"
            className="bg-gray-100 border-0 min-h-[100px]"
            {...register("comment", { required: true })}
          />
          {errors.comment && <p className="text-sm text-red-500">Comment is required</p>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
