"use client"



import React from 'react';
import DashboardHeader from '../shared/dashboardHeader/DashboardHeader';
import { Card, CardContent } from '../ui/card';
import { TestimonialsCard } from '../testimonialsCard/TestimonialsCard';

import { Star } from 'lucide-react';


import { id, TestimonialProps } from '@/interface/globalType';
// import Loader from '../loader/Loader';
import { useGetAllFeedbacksQuery } from '../../redux/api/feedbacksApi';

const FeedBacksPage = () => {
    const { data: testimonials} = useGetAllFeedbacksQuery(undefined);

    // console.log(testimonials);
    // if (isLoading) {
    //     return <Loader />
    // }
    return (
        <div className='dashboard-containers'>
            <DashboardHeader
                title="Manage User Feedback and Ratings"
                toolText="Feedback Actions"
                subtitle="View and manage feedback, including actions like delete, publish, or unpublish, and see average ratings."
            />

            <Card className='mt-10'>
                <div className="w-full mx-auto lg:mx-0 lg:ml-7 max-w-sm p-5">
                    <div className="flex flex-row justify-between items-center gap-4">
                        <div className="flex flex-col items-center sm:items-start">
                            <p className="text-sm font-medium text-muted-foreground">Total Feedbacks</p>
                            <p className="text-3xl font-bold">{testimonials?.length}</p>
                        </div>
                        <div className="h-20  sm:h-12 sm:w-px bg-border border" />
                        <div className="flex flex-col items-center sm:items-end">
                            <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
                            <div className="flex items-center gap-1">
                                <p className="text-3xl font-bold">{testimonials?.avg_rating}</p>
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <CardContent className='grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        testimonials?.data?.map((data: TestimonialProps & id, idx: number) => <TestimonialsCard isAdmin={true} idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    );
};

export default FeedBacksPage;