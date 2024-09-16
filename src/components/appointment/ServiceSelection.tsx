import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  { id: 1, name: "Haircut" },
  { id: 2, name: "Coloring" },
  { id: 3, name: "Styling" },
  { id: 4, name: "Manicure" },
];

interface ServiceSelectionProps {
  onUpdate: (details: { service: string }) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ onUpdate }) => {
  const handleServiceChange = (value: string) => {
    onUpdate({ service: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="service">Select Service</Label>
        <Select onValueChange={handleServiceChange}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id.toString()}>
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ServiceSelection;
