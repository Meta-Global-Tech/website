import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { WorkingWithUs } from "@/components/working-with-us";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FlipWords } from "@/components/ui/flip-words";
import { ScheduleCallModal } from "@/components/schedule-call-modal";
import { Divider } from "@nextui-org/divider";
import {ValueList} from "@/components/values-list";
import Script from 'next/script'


export default function Home() {
  const words = [
    "will launching your product",
    "can expand your engineering bandwidth",
    "is your technology partner",
  ];
  return (
    <>

    
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center" style={{height:"200px"}}>
        <h1 className={title()}>MetaGlobal &nbsp;</h1>
        <h1  className={`${title()} h-5`}>
          <FlipWords words={words} />
          &nbsp;
        </h1>
        <br />
      </div>

      <div className="inline-block max-w-xlg text-center justify-center">
        <h2 className={subtitle({ class: "mt-2" })}>Lets talk.</h2>
        <ScheduleCallModal />
      </div>
      <Divider className="my-12" />
      <div className="text-center justify-center">
        {/* <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet> */}
        Our agile tech teams are capable of delivering value with:
        <br />
        <br />
<ValueList/>
        
      </div>
      <Divider className="my-12" />

      <div className="text-center justify-center">
        We can help to expand your tech team with experienced
        <br />
        <br />
        <ul>
          <li> DevOps, </li>
          <li> Full stack, </li>
          <li> Machine learning, </li>
          <li> UI/UX,</li>
          <li> QA automation </li>
          <li> engineers. </li>

        </ul>
      </div>
      <Divider className="my-12" />

      <div className="text-center justify-center">
        <WorkingWithUs />
      </div>
    </section>
    </>

  );
}
