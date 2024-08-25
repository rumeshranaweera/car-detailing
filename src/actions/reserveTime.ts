"use server";

import prisma from "@/lib/db";

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
  const { time_period, day } = Object.fromEntries(formData);
  //wait 3s
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("createReservation => ", time_period, day);
  //   return prisma.reservation.create({
  //     data: {
  //       userId: userId as string,
  //       timeSlotId: timeSlotId as string,
  //     },
  //   });
}
