import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "@/i18n/rounting";
import Close from "../../public/svg/Close";

interface FileFormProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  isSubmitting: boolean;
}

const NoticeFileForm = ({ files, setFiles, isSubmitting }: FileFormProps) => {
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

  const handleFileDelete = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <Label
            className="cursor-pointer rounded bg-[#78b237] px-6 py-2 text-white transition-colors hover:bg-[#78b237]/90"
            htmlFor="fileInput"
          >
            첨부 파일
          </Label>
          <Input
            id="fileInput"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="border-[#78b237] text-[#78b237] hover:bg-[#78b237]/10"
          >
            취소
          </Button>
          <Button
            type="submit"
            className="bg-[#78b237] hover:bg-[#78b237]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "등록 중..." : "등록"}
          </Button>
        </div>
      </div>
      {files.length > 0 && (
        <div className="grid w-[15rem] grid-cols-2 gap-2">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex gap-2 rounded-full border px-3 py-1 text-sm"
            >
              <div className="truncate">{file.name}</div>
              <button
                type="button"
                onClick={() => handleFileDelete(file.name)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Close />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticeFileForm;
