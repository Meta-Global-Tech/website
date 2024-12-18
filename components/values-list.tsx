"use client";

import React from "react";
// import {Image} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import { AndroidIcon, TableauIcon } from "@/components/icons";
import {Avatar} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import {Spacer} from "@nextui-org/react";
// import { useRouter } from 'next/router';

export const ValueList = ()=>{
  return (
    <div className="text-center justify-center">
    <ul className="text-center justify-center space-y-4">
    <li className="justify-center">
      <span className="inline-block align-middle pb-2">
        Business intelligence software integration
      </span>
      <span className="flex justify-center">
      <Spacer x={1} />
      <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/tableau.ico`}
      alt="tableau logo"
    />
    <Spacer x={1} />
        <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/sisense.png`}
      alt="sisense logo"
    />
    <Spacer x={1} />

            <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/powerbi.png`}
      alt="powerbi logo"
    />
    <Spacer x={1} />

                <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/metabase.png`}
      alt="metabase logo"
    />

      </span>
    
    </li>
    <li className="justify-center">

      <span className="inline-block align-middle pb-2">
      Cross platform application development
      </span>
      <span className="flex justify-center">
      <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/android.png`}
      alt="Android logo"
    />
    <Spacer x={1} />

    <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/apple.png`}
      alt="Apple logo"
    />
      <Spacer x={1} />

<Image
  as={NextImage}
  width={32}
  height={32}
  src={`icons/web1.png`}
  alt="web logo"
/>
      </span>
    </li>
    <li className="justify-center">

    <span className="inline-block align-middle pb-2">
      AI integration
      </span>
      <span className="flex justify-center">
      <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/robot.png`}
      alt="Robot"
    />
      </span>
    </li>
    <li className=" justify-center">
    
      <span className="inline-block align-middle pb-2">
      Blockchain product development
      </span>
      <span className="flex justify-center">
      <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/solana.png`}
      alt="solana logo"
    />
    <Spacer x={1} />

    <Image
      as={NextImage}
      width={32}
      height={32}
      src={`icons/ether.png`}
      alt="ether logo"
    />
</span>
    </li>
</ul>
</div>
    // <Listbox
    
    // // disabledKeys={["1", "2", "3", "4"]}
    // //   className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
    // //   itemClasses={{
    // //     base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[disabled=true]:bg-content1 ",
    // //   }}
    // >
    //   <ListboxItem
    //   isReadOnly={true}
    //   shouldHighlightOnFocus={false}
    //     key="1"
    //     startContent={
    //         <>
    //       <TestIcon/>
    //       <TestIcon/>
    //       </>
    //     }
    //   >
    //     Business intelligence software integration,
    //   </ListboxItem>
    //   <ListboxItem
    //     key="2"
    //     startContent={
    //         <>
    //       <TestIcon/>
    //       <TestIcon/>
    //       </>
    //     }
    //   >
    //     Cross platform application development,
    //   </ListboxItem>
    //   <ListboxItem
    //     key="3"
    //     startContent={
    //         <>
    //       <TestIcon/>
    //       <TestIcon/>
    //       </>
    //     }
    //   >
    //     AI integration,
    //   </ListboxItem>
    //   <ListboxItem
    //     key="4"
    //     startContent={
    //         <>
    //       <TestIcon/>
    //       <TestIcon/>
    //       </>
    //     }
    //   >
    //     Blockchain product development.
    //   </ListboxItem>

    // </Listbox>
  );
}
