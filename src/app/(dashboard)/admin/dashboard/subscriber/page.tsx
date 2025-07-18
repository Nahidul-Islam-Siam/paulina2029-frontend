
import SubscriberPage from '@/components/subscriberPage/SubscriberPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Subscriber | Explain My Meds',
}



const page = () => {
    return (
        <SubscriberPage />
    );
};

export default page;