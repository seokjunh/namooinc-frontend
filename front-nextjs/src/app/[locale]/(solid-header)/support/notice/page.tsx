import NoticeBoard from "@/components/NoticeBoard";

interface pageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
const page = ({ searchParams }: pageProps) => {
  return <NoticeBoard searchParams={searchParams} />;
};
export default page;
