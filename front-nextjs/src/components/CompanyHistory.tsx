import CompanyHistoryList from "./CompanyHistoryList";

const CompanyHistory = () => {
  return (
    <div className="pt-[6.25rem]">
      <div className="relative flex h-44 items-center justify-center bg-slate-700 sm:h-64">
        <div className="text-2xl font-bold text-white md:text-4xl">연혁</div>
      </div>
      <div className="pb-14 sm:pb-28">
        <CompanyHistoryList />
      </div>
    </div>
  );
};
export default CompanyHistory;
