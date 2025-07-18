'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquareDot, MessageSquareHeart, UsersRound } from 'lucide-react'

// Utility function to format currency
const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
    }).format(value)
}

// Animated number component
const AnimatedNumber = ({ value, duration = 1000 }: { value: number; duration?: number }) => {
    const [current, setCurrent] = useState(0)
    const stepRef = useRef<number>()
    const startTimeRef = useRef<number>()

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp
            }

            const progress = timestamp - startTimeRef.current
            const percentage = Math.min(progress / duration, 1)

            setCurrent(value * percentage)

            if (percentage < 1) {
                stepRef.current = requestAnimationFrame(animate)
            }
        }

        stepRef.current = requestAnimationFrame(animate)

        return () => {
            if (stepRef.current) {
                cancelAnimationFrame(stepRef.current)
            }
        }
    }, [value, duration])

    return formatCurrency(current)
}


export default function Component({publishedFeedbacks, TotalFeedBacks, subscriber} : {publishedFeedbacks: number, TotalFeedBacks: number, subscriber: number}) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-28">
                    <div className="space-y-1">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <MessageSquareDot className="h-8 w-8 text-text_title" />
                                Total Feedbacks
                            </div>
                        </CardTitle>
                        <p className="text-xs text-muted-foreground"> View and manage all submitted feedback from users</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        <AnimatedNumber value={TotalFeedBacks || 0} />
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
                        <p className="text-xs text-muted-foreground">View and manage feedback currently showcased on the homepage</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        <AnimatedNumber value={publishedFeedbacks || 0} />
                    </div>
                </CardContent>
            </Card>
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-28">
                    <div className="space-y-1">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <UsersRound className="h-8 w-8 text-text_title" />
                                Total Subscriber
                            </div>
                        </CardTitle>
                        <p className="text-xs text-muted-foreground"> Total number of subscribers to the latest blogs and articles</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        <AnimatedNumber value={subscriber || 0} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}