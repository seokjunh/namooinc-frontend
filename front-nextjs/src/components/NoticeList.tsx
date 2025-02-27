import { fetchPosts } from "@/lib/api";
import { post } from "@/lib/type";
import NoticePagination from "./NoticePagination";
import PostContent from "./PostContent";
import EditAuthButton from "./EditAuthButton";

interface NoticeBoardProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const NoticeList = async ({ searchParams }: NoticeBoardProps) => {
  const { page = "1", searchTerm = "" } = await searchParams;

  const response = await fetchPosts(page, searchTerm);

  const posts: post[] = response.content;
  const currentPage = response.number + 1;
  const postPerPage = response.size;
  const totalPosts = response.totalElements;

  return (
    <div>
      <div className="mb-1 flex items-center justify-between sm:mb-2">
        <div className="text-xs md:text-base lg:text-lg">
          총&nbsp;
          <span className="font-semibold text-blue-500">{totalPosts}</span>
          건이 검색되었습니다.
        </div>
        <EditAuthButton />
      </div>

      <div>
        <div className="grid grid-cols-12 border-b border-t-2 border-gray-200 bg-gray-100 py-1 text-center text-xs sm:py-2 md:text-base lg:text-xl">
          <div className="col-span-1">No</div>
          <div className="col-span-9 xs:pl-[4.5rem] pl-[1.5rem]">제목</div>
          <div className="col-span-2">작성일</div>
        </div>
        {totalPosts === 0 ? (
          <div className="py-4 text-center text-lg font-semibold text-gray-500">
            게시물이 없습니다.
          </div>
        ) : (
          <div>
            {posts.map((post, idx) => (
              <div key={idx}>
                <PostContent
                  post={post}
                  idx={idx}
                  totalPosts={totalPosts}
                  currentPage={currentPage}
                  postPerPage={postPerPage}
                />
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 scale-75 sm:mt-8 sm:scale-100">
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
export default NoticeList;
