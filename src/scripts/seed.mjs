import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      address: "123 Main St",
      contact: "555-1234",
      email: "johndoe@example.com",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      address: "456 Elm St",
      contact: "555-5678",
      email: "janesmith@example.com",
    },
  });

  // Seed TimeSlots
  const timeSlot1 = await prisma.timeSlot.create({
    data: {
      startTime: new Date("2024-08-01T08:00:00Z"),
      endTime: new Date("2024-08-01T09:00:00Z"),
      dayOfWeek: "monday",
    },
  });

  const timeSlot2 = await prisma.timeSlot.create({
    data: {
      startTime: new Date("2024-08-02T08:00:00Z"),
      endTime: new Date("2024-08-02T09:00:00Z"),
      dayOfWeek: "tuesday",
    },
  });

  // Seed Reservations
  const reservation1 = await prisma.reservation.create({
    data: {
      userId: user1.id,
      timeSlotId: timeSlot1.id,
    },
  });

  const reservation2 = await prisma.reservation.create({
    data: {
      userId: user2.id,
      timeSlotId: timeSlot2.id,
    },
  });

  console.log("Seeding completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
