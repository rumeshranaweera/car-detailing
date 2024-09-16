"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DayTimeSelection from "@/components/appointment/DayTimeSelection";
import ServiceSelection from "@/components/appointment/ServiceSelection";
import ClientDetails from "@/components/appointment/ClientDetails";
import Confirmation from "@/components/appointment/Confirmation";
import { cn } from "@/lib/utils";

function CreateNewAppointment() {
  const [activeStep, setActiveStep] = useState(0);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef<HTMLDivElement>(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    service: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
  });

  const steps = ["Day and Time", "Service", "Client Details", "Confirmation"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleUpdateAppointmentDetails = (
    details: Partial<typeof appointmentDetails>
  ) => {
    setAppointmentDetails((prev) => ({ ...prev, ...details }));
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <DayTimeSelection onUpdate={handleUpdateAppointmentDetails} />;
      case 1:
        return <ServiceSelection onUpdate={handleUpdateAppointmentDetails} />;
      case 2:
        return <ClientDetails onUpdate={handleUpdateAppointmentDetails} />;
      case 3:
        return <Confirmation appointmentDetails={appointmentDetails} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [activeStep]);

  return (
    <Card className="p-6">
      <div className="flex">
        {/* Vertical Stepper */}
        <div className="w-1/4 pr-6">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {steps.map((step, index) => (
              <li key={step} className="mb-10 ml-6">
                <span
                  className={cn(
                    "absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900",
                    index <= activeStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  {index + 1}
                </span>
                <h3
                  className={cn(
                    "font-medium leading-tight",
                    index <= activeStep
                      ? "text-blue-600 dark:text-blue-500"
                      : "text-gray-500"
                  )}
                >
                  {step}
                </h3>
              </li>
            ))}
          </ol>
        </div>

        {/* Content */}
        <div className="w-3/4">
          <div
            className="transition-[height] duration-300 ease-in-out overflow-hidden"
            style={{ height: contentHeight }}
          >
            <div ref={contentRef}>
              {steps.map((label, index) => (
                <div
                  key={label}
                  className={index !== activeStep ? "hidden" : ""}
                >
                  <h2 className="text-lg font-semibold mb-4">{label}</h2>
                  {renderStepContent(index)}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              onClick={activeStep === steps.length - 1 ? undefined : handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CreateNewAppointment;
