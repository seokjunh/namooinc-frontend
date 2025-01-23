import CompanyHistoryList from "./CompanyHistoryList";

const CompanyHistory = () => {
  return (
    <div className="py-[6.25rem]">
      <div className="relative flex h-44 items-center justify-center bg-slate-700 sm:h-64">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
          연혁
        </div>
      </div>
      <CompanyHistoryList />
    </div>
  );
};
export default CompanyHistory;
