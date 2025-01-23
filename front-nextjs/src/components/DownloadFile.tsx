"use client";

const pdfList = [
  {
    title: "지능형 제조환경 통합관리시스템(Smart Factory) 소개자료",
    file: "SmartFactory.pdf",
  },
  { title: "통합방재 모니터링 솔루션(S2E) 소개자료", file: "S2E.pdf" },
  {
    title: "유틸리티 통합 모니터링 솔루션(U2E for 반도체) 소개자료",
    file: "U2EforSEMI.pdf",
  },
  { title: "Reference", file: "Namooinc_Profile_Adaptor_Reference.pdf" },
];

const DownloadFile = () => {
  const DownloadHandler = (fileName: string) => {
    const element = document.createElement("a");
    // 퍼블릭 폴더 내에 있는 파일 경로로 설정
    element.href = `/pdfs/${fileName}`;
    element.download = fileName;
    element.click();
  };

  return (
    <div className="py-[6.25rem]">
      <div className="mx-auto max-w-xs pt-16 md:max-w-xl lg:max-w-[90rem]">
        <div className="mb-b mb-[5rem] text-center sm:text-4xl text-2xl font-bold underline underline-offset-[1rem]">
          자료실
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {pdfList.map((item, index) => (
            <div key={index}>
              <div className="w-full rounded-xl bg-gray-100 sm:p-[2.5rem] p-[1rem] shadow-lg md:text-xl lg:text-2xl text-xs">
                <div className="sm:mb-6 mb-3 font-medium">{item.title}</div>
                <button
                  className="font-normal text-[#78b237]"
                  onClick={() => DownloadHandler(item.file)}
                >
                  다운로드 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadFile;
