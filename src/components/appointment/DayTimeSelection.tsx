import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DayTimeSelectionProps {
  onUpdate: (details: { date: string; time: string }) => void;
}

const DayTimeSelection: React.FC<DayTimeSelectionProps> = ({ onUpdate }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<string>("");

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate) {
      onUpdate({ date: newDate.toISOString(), time });
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
    if (date) {
      onUpdate({ date: date.toISOString(), time: event.target.value });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="date">Select Date</Label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          className="rounded-md border"
        />
      </div>
      <div>
        <Label htmlFor="time">Select Time</Label>
        <Input type="time" id="time" value={time} onChange={handleTimeChange} />
      </div>
    </div>
  );
};

export default DayTimeSelection;
