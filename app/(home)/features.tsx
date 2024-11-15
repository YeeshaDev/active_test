import FullScreenModal from "./full-screen-modal";
import TouchFeature from "./touch-feature";
import ColorFeature from "./color-feature";

export default function Features() {
  return (
    <>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ColorFeature />
        <TouchFeature />
        <FullScreenModal />
      </div>
    </>
  );
}
