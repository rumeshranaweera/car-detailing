import { Dialog, DialogOverlay } from "@/components/ui/dialog";

function loading() {
  return (
    <Dialog open>
      <DialogOverlay className="bg-black/30" />
    </Dialog>
  );
}

export default loading;
