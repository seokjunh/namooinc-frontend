const historyData = [
  {
    year: 2015,
    events: [
      { month: "12월", content: "스마트팩토리 솔루션 2.0 글로벌 출시" },
      { month: "10월", content: "스마트팩토리 솔루션 2.0 출시" },
      { month: "2월", content: "글로벌 인증 획득" },
    ],
  },
  {
    year: 2012,
    events: [
      { month: "9월", content: "클라우드 기반 생산성 향상 시스템 도입" },
      { month: "7월", content: "국내 주요 고객사와 파트너십 체결" },
      { month: "3월", content: "AI 기반 시스템 도입" },
    ],
  },
  {
    year: 2010,
    events: [
      { month: "11월", content: "산업 혁신 대상 수상" },
      { month: "8월", content: "국제 전시회에서 스마트팩토리 기술 발표" },
      { month: "1월", content: "스마트시티 프로젝트 참여" },
    ],
  },
  {
    year: 2008,
    events: [
      { month: "8월", content: "국제 인증 획득" },
      { month: "4월", content: "글로벌 시장 확장" },
    ],
  },
  {
    year: 2007,
    events: [
      { month: "11월", content: "첫 번째 글로벌 전시회 참가" },
      { month: "6월", content: "첫 번째 글로벌 파트너십 체결" },
      { month: "2월", content: "스마트팩토리 솔루션 개발 시작" },
    ],
  },
  {
    year: 2006,
    events: [
      { month: "12월", content: "첫 해외 지사 설립" },
      { month: "9월", content: "첫 해외 지사 설립" },
      { month: "5월", content: "국내 시장 진출" },
    ],
  },
  {
    year: 2005,
    events: [
      { month: "12월", content: "첫 번째 글로벌 계약 체결" },
      { month: "3월", content: "첫 번째 제품 출시" },
      { month: "1월", content: "회사 설립" },
    ],
  },
];

const CompanyHistoryItem2 = () => {
  return (
    <div className="space-y-7 sm:space-y-14">
      {historyData.map((data) => (
        <div key={data.year}>
          <div className="mb-4 flex space-x-6">
            <div className="text-2xl font-semibold">{data.year}</div>
            <div>
              <div>
                {data.events.map((item, index) => (
                  <div
                    key={`${data.year}-${index}`}
                    className="flex space-x-10 text-sm sm:space-x-12 sm:text-lg"
                  >
                    <div className="font-medium">{item.month}</div>

                    <div className="absolute">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyHistoryItem2;
