import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import { ScheduleCallModal } from "@/components/schedule-call-modal";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

export default function CareersPage() {
  return (
    <>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"> */}
      <h1 className={title()}>Careers&nbsp;</h1>
      <Divider className="my-4" />
      <span>No open positions are currently available. We appreciate your interest in our company.</span>
    
      <iframe data-w-type="embedded" frame-border="0" scrolling="no" margin-height="0" margin-width="0" src="https://shy33.mjt.lu/wgt/shy33/xhj3/form?c=22ba3dcc" width="390px" style={{height: 0}}></iframe>

<script type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js"></script>
      

      <section className="flex-col space-y-8  gap-8 columns-1 md:columns-2 py-8 md:py-10">
        {/* <JobCard /> */}
      </section>
      
    </>
  );
}
