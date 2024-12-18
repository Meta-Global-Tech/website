"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { CalendarAddEvent } from "@/components/icons";
import { Button } from "@/components/ui/moving-border";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';
import Script from 'next/script'

export const ScheduleCallModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
    <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                />
      <button onClick={(onOpen)} className="p-[3px] relative">
      
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Schedule a call
        </div>
      </button>
      {/* https://ui.aceternity.com/components/hover-border-gradient */}
      {/* https://ui.aceternity.com/components/moving-border */}
      {/* https://ui.aceternity.com/components/tailwindcss-buttons */}
      {/* <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button> */}

      <Modal
        size={"xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Schedule a call
              </ModalHeader>
              <ModalBody>
              <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/meta-global/meet-metaglobal?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
                {/* <script>
                  {
                    console.log(Calendly);
                    Calendly.initPopupWidget({url: 'https://calendly.com/meta-global/30min'});
                    Calendly.showPopupWidget();
                    Calendly.initInlineWidget();

                  }
                </script> */}

              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
