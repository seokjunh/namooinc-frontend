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
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div
            className="grid cursor-pointer grid-cols-5 border-b py-1 text-xs hover:bg-gray-50 hover:shadow-md sm:grid-cols-10 sm:py-2 md:text-base lg:text-lg"
            onClick={() => handleClick(post.id)}
          >
            {/* 게시물 ID */}
            <div className="text-center">{post.id}</div>

            {/* 제목 */}
            <div className="col-span-2 text-center sm:col-span-6">
              {post.title}
            </div>

            {/* 작성자 */}
            <div className="text-center">관리자</div>

            {/* 작성일 */}
            <div className="text-center sm:col-span-2">{post.createdAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NoticeList;
