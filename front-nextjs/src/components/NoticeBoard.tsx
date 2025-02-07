"use cilent";

import SearchNotice from "./SearchNotice";
import NoticeList from "./NoticeList";
import NoticeWriteButton from "./NoticeWriteButton";
import SessionCheck from "./SessionCheck";

interface NoticeBoardProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const NoticeBoard = ({ searchParams }: NoticeBoardProps) => {
  return (
    <div className="pt-[6.25rem]">
      <div className="relative flex h-44 items-center justify-center sm:h-64">
        <div className="text-2xl font-bold underline underline-offset-[1rem] md:text-4xl">
          게시판
        </div>
      </div>
      <div className="mx-auto max-w-sm space-y-6 pb-14 sm:pb-28 md:max-w-2xl lg:max-w-5xl">
        <div className="flex items-center justify-center">
          <SearchNotice />
        </div>
        <div className="relative">
          <NoticeList searchParams={searchParams} />
          <SessionCheck>
            <div className="absolute bottom-0 right-0 sm:scale-100 scale-75 ">
              <NoticeWriteButton />
            </div>
          </SessionCheck>
        </div>
      </div>
    </div>
  );
};
export default NoticeBoard;
