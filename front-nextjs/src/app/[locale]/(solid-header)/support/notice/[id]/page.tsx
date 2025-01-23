import NoticeById from "@/components/NoticeById";

const page = ({ params }: { params: Promise<{ id: number }> }) => {
  return <NoticeById params={params} />;
};
export default page;
