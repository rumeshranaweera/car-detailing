"use server";

import prisma from "@/lib/db";
import { DaysOfWeek } from "@prisma/client";

export async function getAllReservations(
  perPage: number,
  page: number,
  formData?: FormData
) {
  console.log(page, perPage, formData);
  const timeSlots = await prisma.timeSlot.findMany({
    skip: (page - 1) * perPage,
    take: perPage,
  });
  const totalItems = await prisma.timeSlot.count();
  const totalPages = Math.ceil(totalItems / perPage);
  return {
    timeSlots,
    totalItems,
    totalPages,
    currentPage: page,
  };
}
export async function createReservation(formData: FormData) {
  const time_period = formData.get("time_period") as string;
  const day = formData.get("day") as DaysOfWeek;
  //3:00pm - 6:00pm
  //grab start time and end time
  const [startTime, endTime] = time_period
    .split(" - ")
    .map((time) => new Date(`${time} ${day}`).toISOString());

  //wait 3s
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("createReservation => ", startTime, endTime, day);
  return prisma.timeSlot.create({
    data: {
      startTime,
      endTime,
      dayOfWeek: day,
    },
  });
}
