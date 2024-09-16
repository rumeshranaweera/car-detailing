import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConfirmationProps {
  appointmentDetails: {
    date: string;
    time: string;
    service: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  };
}

const Confirmation: React.FC<ConfirmationProps> = ({ appointmentDetails }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment Confirmation</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="font-semibold">Date:</dt>
            <dd>{appointmentDetails.date}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Time:</dt>
            <dd>{appointmentDetails.time}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Service:</dt>
            <dd>{appointmentDetails.service}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Name:</dt>
            <dd>{appointmentDetails.clientName}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Email:</dt>
            <dd>{appointmentDetails.clientEmail}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Phone:</dt>
            <dd>{appointmentDetails.clientPhone}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};

export default Confirmation;
