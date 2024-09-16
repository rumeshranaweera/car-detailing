import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ClientDetailsProps {
  onUpdate: (details: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  }) => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ onUpdate }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onUpdate({ [name]: value } as any);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="clientName">Name</Label>
        <Input id="clientName" name="clientName" onChange={handleInputChange} />
      </div>
      <div>
        <Label htmlFor="clientEmail">Email</Label>
        <Input
          id="clientEmail"
          name="clientEmail"
          type="email"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="clientPhone">Phone</Label>
        <Input
          id="clientPhone"
          name="clientPhone"
          type="tel"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ClientDetails;
