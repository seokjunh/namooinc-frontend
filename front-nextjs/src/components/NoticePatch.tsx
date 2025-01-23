import { dynamicFetchPost } from "@/lib/api";
import NoticePatchForm from "./NoticePatchForm";

const NoticePatch = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const { detailPost } = await dynamicFetchPost(id);
  return <NoticePatchForm post={detailPost} />;
};
export default NoticePatch;
