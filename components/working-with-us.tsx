"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export const WorkingWithUs = () => {
  return (
    <div className="pb-12">
      <div className="inline-block max-w-xlg text-center justify-center pb-12">
        <h1 className={subtitle({ class: "" })}>Working with us is easy</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Card>
          <CardBody>
            <p>Connect with us (quick meeting)</p>
          </CardBody>
        </Card>
        <br/>
        <p className="bold">↓</p>
        <br/>
        <Card>
          <CardBody>
            <p>Roadmapping (Planning)</p>
          </CardBody>
        </Card>
        <br/>
        <p className="bold">↓</p>
        <br/>
        <Card>
          <CardBody>
            <p>
              Engagement/Sprints delivering incremental value in each sprint.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
