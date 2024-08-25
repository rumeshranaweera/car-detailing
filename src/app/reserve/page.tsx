import Link from "next/link";
import ReserveTime from "./_components/reserveTime";
import { getAllReservations } from "@/actions/reserveTime";

function page() {
  return (
    <div className="text-black">
      <Link href={"/reserve/create"}>new reservation</Link>

      {/* <Reservations /> */}
    </div>
  );
}

export default page;

const Reservations = async () => {
  // const updateUserWithId = getAllReservations.bind(null, 1, 2);
  // const data = await updateUserWithId();
  console.clear();
  // console.log("data =>>>", data);
  // const daysOfWeeks = Object.groupBy(timeSlots, ({ dayOfWeek }) => dayOfWeek);
  // console.log(daysOfWeeks);

  return <ReserveTime />;
};
