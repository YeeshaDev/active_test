import { FingerPrintIcon } from "@heroicons/react/20/solid";
import Button from "@/components/button";

export default function TouchFeature() {
  return (
    <>
      <Button className="bg-[#1181ED] text-sm font-medium rounded-3xl w-full text-white py">
        <div className="flex items-center gap-4">
          <FingerPrintIcon className="w-5 h-5" />
          Touch test
        </div>
      </Button>
    </>
  );
}
