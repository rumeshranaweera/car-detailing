"use client";
import { createReservation } from "@/actions/reserveTime";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormStatus } from "react-dom";

function CreateReservation() {
  const router = useRouter();
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <CardHeader>
          <CardTitle>Add new TimeSlot</CardTitle>
        </CardHeader>
        <form action={createReservation}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Time Period</Label>
                <Select name="time_period" required>
                  <SelectTrigger id="time_period">
                    <SelectValue placeholder="Select *" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {[
                      "7:00am - 10:00am",
                      "11:00am - 2:00pm",
                      "3:00pm - 6:00pm",
                    ].map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Day</Label>
                <Select name="day" required>
                  <SelectTrigger id="day">
                    <SelectValue placeholder="Select *" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <SelectItem key={day} value={day}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Submit />
          </CardFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateReservation;

function Submit() {
  const status = useFormStatus();
  return (
    <Button disabled={status.pending} type="submit">
      Create
    </Button>
  );
}
