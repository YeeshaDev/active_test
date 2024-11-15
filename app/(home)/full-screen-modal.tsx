"use client";

import { useState } from "react";
import Button from "@/components/button";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import Modal from "@/components/modal/modal";
import Image from "next/image";

export default function FullScreenModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modal.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Modal.Trigger asChild>
        <Button className="bg-white ring-1 text-sm font-medium rounded-3xl w-full text-gray-500 py">
          <div className="flex items-center gap-4">
            <DevicePhoneMobileIcon className="w-5 h-5" />
            Full screen mode
          </div>
        </Button>
      </Modal.Trigger>
      <Modal className="bg-white rounded-3xl min-h-[80svh]">
        <h3 className="font-medium text-gray-900 text-center mb-5 pt-6">
          How to enable full screen mode?
        </h3>
        <div className="p-4 mb-3">
          <ol className="list-decimal list-inside text-gray-600 text-sm space-y-2">
            <li>
              <span>
                Tap the share button on the top right corner of the screen.
              </span>
              <Image
                className="mb-6 pt-2"
                src="/images/step-1.webp"
                alt="full-screen-step-1"
                width={312}
                height={48}
              />
            </li>
            <li>
              <span>
                Scroll down and tap on the{" "}
                <span className="font-semibold">
                  &quot;Add to home screen&quot;
                </span>{" "}
                option.
              </span>
              <Image
                className="mb-6 pt-2"
                src="/images/step-2.webp"
                alt="full-screen-step-2"
                width={312}
                height={48}
              />
            </li>
          </ol>
        </div>
        <div className="px-4">
          <Modal.Close asChild>
            <Button className="bg-[#1181ED] text-sm font-medium rounded-3xl w-full text-white py">
              Start test
            </Button>
          </Modal.Close>
        </div>
      </Modal>
    </Modal.Root>
  );
}
