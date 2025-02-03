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

interface fileData {
  id: number;
  saveName: string;
}

interface fileProps {
  files: fileData[];
}

const truncate = (str: string, n: number) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

const downloadFile = async (id: number) => {
  const response = await fetch(`http://localhost:8080/file/download/${id}`);

  const data = await response.json();

  console.log(data);
};

const FileCarousel = ({ files }: fileProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="justify-normal text-gray-500 hover:no-underline">
          {files.length}개의 첨부파일
        </AccordionTrigger>
        <AccordionContent className="pl-[3rem] pt-1">
          <Carousel
            className={`${files.length === 1 ? "w-[10rem]" : ""} ${files.length === 2 ? "w-[20rem]" : ""} ${files.length >= 3 ? "w-[30rem]" : ""}`}
          >
            <CarouselContent className="-ml-4">
              {files.map((file, index) => (
                <CarouselItem
                  key={index}
                  className={`pl-4 ${files.length === 1 ? "basis-full" : ""} ${files.length === 2 ? "md:basis-1/2" : ""} ${files.length >= 3 ? "lg:basis-1/3" : ""}`}
                >
                  {/* 다운로드 컴포넌트로 변경 */}
                  <Card className="shadow-none">
                    <CardContent className="flex items-center justify-center p-0">
                      <button
                        className="text-lg font-semibold"
                        onClick={() => downloadFile(file.id)}
                      >
                        {truncate(file.saveName, 10)}
                      </button>
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
