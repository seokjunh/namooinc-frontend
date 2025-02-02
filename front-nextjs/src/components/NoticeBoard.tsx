import { fetchPosts } from "@/lib/api";
import SearchNotice from "./SearchNotice";
import NoticeList from "./NoticeList";
import NoticePagination from "./NoticePagination";

interface NoticeBoardProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const NoticeBoard = async ({ searchParams }: NoticeBoardProps) => {
  const { page = "1", searchTerm = "" } = await searchParams;

  const response = await fetchPosts(page, searchTerm);

  const posts = response.content;
  const currentPage = response.number + 1;
  const postPerPage = response.size;
  const totalPosts = response.totalElements;

  return (
    <div className="pt-[6.25rem]">
      <div className="relative flex h-44 items-center justify-center sm:h-64">
        <div className="text-2xl font-bold underline underline-offset-[1rem] md:text-4xl">
          게시판
        </div>
      </div>
      <div className="mx-auto max-w-xs space-y-6 pb-14 sm:pb-28 md:max-w-2xl lg:max-w-5xl">
        <div className="flex items-center justify-center">
          <SearchNotice />
        </div>
        <div>
          <div className="mb-2 text-xs md:text-base lg:text-lg">
            총&nbsp;
            <span className="font-semibold text-blue-500">{totalPosts}</span>
            건이 검색되었습니다.
          </div>
          <div className="grid grid-cols-5 border-b border-t-2 border-gray-200 bg-gray-100 py-1 text-center text-xs sm:grid-cols-10 sm:py-2 md:text-base lg:text-xl">
            <div>No</div>
            <div className="col-span-3 sm:col-span-7">제목</div>
            <div className="sm:col-span-2">작성일</div>
          </div>
          {totalPosts === 0 ? (
            <div className="py-4 text-center text-lg font-semibold text-gray-500">
              게시물이 없습니다.
            </div>
          ) : (
            <NoticeList
              posts={posts}
              totalPosts={totalPosts}
              currentPage={currentPage}
              postPerPage={postPerPage}
            />
          )}
          <div className="mt-8">
            <NoticePagination
              currentPage={currentPage}
              postPerPage={postPerPage}
              totalPosts={totalPosts}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoticeBoard;
