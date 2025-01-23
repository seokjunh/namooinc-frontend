import NoticePatch from "@/components/NoticePatch";

const page = ({ params }: { params: Promise<{ id: number }> }) => {
  return <NoticePatch params={params} />;
};
export default page;
