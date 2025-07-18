"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Mail, Search, Calendar, Send } from "lucide-react";

// import Loader from "../loader/Loader";
import { Email, id } from "@/interface/globalType";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetAllContactsQuery,  } from "../../redux/api/contacts";
import DashboardHeader from "../shared/dashboardHeader/DashboardHeader";

// Mock data for subscriber

export default function SubscriberPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: initialSubscribers } =
    useGetAllContactsQuery(undefined);
  // console.log(initialSubscribers);
  const filteredSubscribers = initialSubscribers?.data?.filter(
    (subscriber: Email & id) =>
      subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendEmail = (email: string) => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="dashboard-containers">
      <DashboardHeader
        title="Engage with Your Subscribers"
        toolText="Subscriber"
        subtitle="Reach out via email and connect with subscribers and address their needs."
      />

      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mb-6 lg:mt-0 md:mt-4">
        <div className="text-lg font-semibold flex items-center gap-2">
          Total Subscribers: {initialSubscribers?.data.length}
        </div>
        <div className="relative max-w-sm">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search subscribers..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </TableHead>
              <TableHead className="">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Subscribed At
                </div>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscribers?.map((subscriber: Email & id) => (
              <TableRow key={subscriber._id}>
                <TableCell className="font-medium">
                  {subscriber.email}
                </TableCell>
                <TableCell className="text-nowrap">
                  {subscriber.time &&
                    new Date(subscriber.time).toLocaleString()}
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <button
                    className="flex items-center justify-end bg-button_bg hover:bg-button_hover_bg text-white rounded-lg px-2 lg:px-3 py-2"
                    onClick={() => handleSendEmail(subscriber.email)}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    <span className="text-nowrap">Send Email</span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
