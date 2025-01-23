import { fetchPosts } from "@/lib/api";
import SearchNotice from "./SearchNotice";
import NoticeWriteButton from "./NoticeWriteButton";
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
    <div className="py-[6.25rem]">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
            게시판
          </h1>
        </div>
        <div className="mb-4 flex justify-between">
          <SearchNotice />
          <NoticeWriteButton />
        </div>
        <div className="mt-6 border-t-2 border-gray-200">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-5 border-b bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 sm:grid-cols-10">
              <div className="text-center">No</div>
              <div className="col-span-2 text-center sm:col-span-6">제목</div>
              <div className="text-center">글쓴이</div>
              <div className="text-center sm:col-span-2">작성일</div>
            </div>
            <NoticeList posts={posts} />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <NoticePagination
            currentPage={currentPage}
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};
export default NoticeBoard;
