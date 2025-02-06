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
import { NoticeFile } from "@/lib/type";
// import File from "../../public/svg/File";

interface fileProps {
  files: NoticeFile[];
}

const downloadFile = async (originalName: string, saveName: string) => {
  const response = await fetch(
    `http://localhost:8080/files/download?savedFileName=${saveName}`,
  );

  const blob = await response.blob();

  const downloadUrl = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = originalName;

  link.click();

  window.URL.revokeObjectURL(downloadUrl);
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
                        className="truncate text-lg font-semibold"
                        onClick={() =>
                          downloadFile(file.originalName, file.saveName)
                        }
                      >
                        {file.originalName}
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
