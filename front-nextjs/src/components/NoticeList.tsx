"use client";

import { usePathname, useRouter } from "@/i18n/rounting";
import { post } from "@/lib/type";

interface NoticeListProps {
  posts: post[];
}

const NoticeList = ({ posts }: NoticeListProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (id: string) => {
    router.push(`${pathName}/${id}`);
  };
  return (
    <div className="overflow-hidden">
      {posts.map((post) => (
        <div key={post.id}>
          <div
            className="grid cursor-pointer grid-cols-5 border-b p-4 text-sm text-gray-700 transition-all hover:bg-gray-50 hover:shadow-md sm:grid-cols-10"
            onClick={() => handleClick(post.id)}
          >
            {/* 게시물 ID */}
            <div className="text-center text-xs text-gray-500 sm:text-base">
              {post.id}
            </div>

            {/* 제목 */}
            <div className="col-span-2 text-center text-xs sm:col-span-6 sm:text-base">
              {post.title}
            </div>

            {/* 작성자 */}
            <div className="text-center text-xs sm:text-base">관리자</div>

            {/* 작성일 */}
            <div className="text-center text-xs text-gray-500 sm:col-span-2 sm:text-base">
              {post.createdAt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NoticeList;
