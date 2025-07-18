import AdminLogin from '@/components/auth/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Admin | Explain My Meds',
}



const page = () => {
    return (
        <div>
            <AdminLogin />
        </div>
    );
};

export default page;