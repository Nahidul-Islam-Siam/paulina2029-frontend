import DashboardPage from '@/components/dashboardPage/DashBoardPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Dashboard | Explain My Meds',
}

const page = () => {
    return (
        <DashboardPage />
    );
};

export default page;