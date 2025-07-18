"use client"

import React, { useEffect, useRef, useState } from 'react'
import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import Loader from '../loader/Loader'
import { Quote, Star, Trash, MessageSquareDot, MessageSquareHeart, UsersRound } from "lucide-react"
import {
  useGetAllFeedbacksQuery,
  useGetPublishedFeedbackQuery,
  useDeleteFeedbackStatusMutation
} from '../../redux/api/feedbacksApi'
import { useGetAllContactsQuery } from '@/redux/api/contacts'
import { toast } from 'sonner'
import { id, TestimonialProps } from '@/interface/globalType'

// Animated number formatter
const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
  }).format(value)

const AnimatedNumber = ({ value, duration = 1000 }: { value: number; duration?: number }) => {
  const [current, setCurrent] = useState(0)
  const stepRef = useRef<number>()
  const startTimeRef = useRef<number>()

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)
      setCurrent(value * percentage)
      if (percentage < 1) stepRef.current = requestAnimationFrame(animate)
    }

    stepRef.current = requestAnimationFrame(animate)

    return () => {
      if (stepRef.current) cancelAnimationFrame(stepRef.current)
    }
  }, [value, duration])

  return formatCurrency(current)
}

type FeedbackItem = TestimonialProps & id

export default function DashboardPage() {
  const { data: PublishedTestimonials} = useGetPublishedFeedbackQuery("published")
  const { data: contacts } = useGetAllContactsQuery("")
  const { data: allFeedbacks} = useGetAllFeedbacksQuery(undefined)
  const [deleteStatus] = useDeleteFeedbackStatusMutation()
console.log(contacts, "contacts");
console.log(PublishedTestimonials, "PublishedTestimonials");

console.log(allFeedbacks, "allFeedbacks");



  const handleDelete = async (_id: string) => {
    try {
      const res = await deleteStatus(_id).unwrap()
      toast.success(res?.message)
    } catch (error) {
      toast.error("Failed to delete feedback")
      console.error("Delete error:", error)
    }
  }

  // if (isLoading || isLoading2 || isLoading3) return <Loader />

  return (
    <div className="dashboard-containers">
      <DashboardHeader
        title="Reach out to us for personalized assistance"
        toolText="Dashboard"
        subtitle="Email, call, or complete the form to learn how we can solve your needs."
      />

      {/* DASHBOARD STATS */}
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-28">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MessageSquareDot className="h-8 w-8 text-text_title" />
                  Total Feedbacks
                </div>
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                View and manage all submitted feedback from users
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedNumber value={allFeedbacks?.data?.length  || 0} />
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-28">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MessageSquareHeart className="h-8 w-8 text-text_title" />
                  Published Feedback
                </div>
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                View feedback showcased on the homepage
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedNumber value={PublishedTestimonials?.data?.length || 0} />
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-28">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <UsersRound className="h-8 w-8 text-text_title" />
                  Total Contacts
                </div>
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Messages received via the contact form
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedNumber value={contacts?.data?.length || 0} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FEEDBACK LIST */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Active Feedbacks</CardTitle>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {PublishedTestimonials?.data?.map((data: FeedbackItem, idx: number) => (
            <div
              key={data._id || idx}
              className="flex flex-col p-2 md:p-6 rounded-xl border h-full"
            >
              <div className="flex-1">
              <div className="flex justify-between">
                <div>
                <h3 className="text-lg font-bold">{data.name}</h3>
                <div className="flex mb-2 gap-1">
                  {[...Array(data.rating)].map((_: undefined, i: number) => (
                  <Star key={i} className="fill-yellow-400 stroke-none w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-600">{data.email}</p>
                </div>
                <Quote className="w-8 h-8 text-gray-200" />
              </div>
              <p className="text-sm text-gray-700 mt-4">&quot;{data.message}&quot;</p>
                  <p className="text-sm text-gray-700 mt-4">&quot;{data.createdAt}&quot;</p>
              </div>

              <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleDelete(data._id)}
                className="flex items-center gap-1 px-3 py-1 bg-red-700 text-white rounded"
              >
                <Trash className="w-4 h-4" /> Delete
              </button>
              </div>
            </div>
            ))}
        </CardContent>
      </Card>
    </div>
  )
}
