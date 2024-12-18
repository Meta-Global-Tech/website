import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About Us</h1>
      <Divider className="my-4" />
      
      We are your partner in software success. 
      We provide access to a global network of talented DevOps Engineers, Full Stack Developers, 
      and QA Engineers to help you build, maintain, and grow your software projects. 
      Whether you need to accelerate development, enhance quality, or optimize your infrastructure, 
      we have the expertise and resources to deliver exceptional results.
    </div>
  );
}

