const historyData = [
  {
    year: 2024,
    events: [
      { month: "10월", content: "글로벌 네트워크 확장 및 진출" },
      { month: "8월", content: "AI 기반 생산성 향상 시스템 도입 완료" },
      { month: "5월", content: "유럽 시장 첫 진출 및 첫 해외 계약 체결" },
      { month: "3월", content: "AI 기반 생산성 향상 시스템 도입" },
    ],
  },
  {
    year: 2023,
    events: [
      { month: "12월", content: "친환경 기술 적용 스마트팩토리 설계 완료" },
      { month: "7월", content: "글로벌 인증 3차 획득" },
      { month: "5월", content: "차세대 스마트팩토리 3.0 프로젝트 발표" },
      { month: "4월", content: "친환경 스마트팩토리 구축 시작" },
    ],
  },
  {
    year: 2022,
    events: [
      { month: "12월", content: "글로벌 시장 10개국 진출 완료" },
      { month: "5월", content: "글로벌 파트너십 강화" },
      { month: "2월", content: "스마트팩토리 2.0 출시" },
    ],
  },
  {
    year: 2020,
    events: [
      { month: "12월", content: "5G 기술 도입 및 시스템 업그레이드" },
      { month: "10월", content: "스마트팩토리 시스템 안정화 완료" },
      { month: "3월", content: "AI 기반 데이터 분석 시스템 도입" },
    ],
  },
  {
    year: 2019,
    events: [
      { month: "12월", content: "디지털 전환 첫 번째 단계 완료" },
      { month: "6월", content: "스마트팩토리 프로젝트 확장" },
      { month: "1월", content: "디지털 전환 프로젝트 시작" },
    ],
  },
  {
    year: 2017,
    events: [
      { month: "11월", content: "세계 산업 혁신 대상 수상" },
      { month: "9월", content: "글로벌 R&D 센터 설립" },
      { month: "5월", content: "산업 혁신 대상 2차 수상" },
    ],
  },
];

const CompanyHistoryItem1 = () => {
  return (
    <div className="sm:space-y-14 space-y-7">
      {historyData.map((data) => (
        <div key={data.year}>
          <div className="mb-4 flex space-x-6">
            <div className="text-2xl font-semibold">{data.year}</div>
            <div>
              <div>
                {data.events.map((item, index) => (
                  <div key={`${data.year}-${index}`} className="flex text-xs sm:text-lg space-x-4">
                    <div className="font-medium">{item.month}</div>

                    <div>{item.content}</div>
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

export default CompanyHistoryItem1;
