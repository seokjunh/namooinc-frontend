import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
// import File from "../../public/svg/File";

const FileCarousel = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="justify-normal text-gray-500 hover:no-underline">
          5개의 첨부파일
        </AccordionTrigger>
        <AccordionContent className="pl-[3rem]">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="shadow-none">
                    <CardContent className="flex items-center justify-center p-0">
                      <span className="text-lg font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FileCarousel;
