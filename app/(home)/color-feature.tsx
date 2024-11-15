import Button from "@/components/button";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
export default function ColorFeature() {
  return (
    <>
      <Button className="bg-[#1181ED] text-sm font-medium rounded-3xl w-full text-white py">
        <div className="flex items-center gap-4">
          <PaintBrushIcon className="w-5 h-5" />
          Color test
        </div>
      </Button>
    </>
  );
}
