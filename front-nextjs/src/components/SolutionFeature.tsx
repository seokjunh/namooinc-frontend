const SolutionFeature = () => {
  return (
    <div className="space-y-8">
      <div className="text-3xl font-bold sm:text-5xl">Key Features</div>
      <div className="space-y-4">
        <div className="text-lg font-semibold sm:text-2xl">
          표준화된 인터페이스
        </div>
        <div>
          <div>
            Data I/O와 비즈니스 로직이 철저히 구분된 아키텍처에 따라, 컴포넌트
            단위의 개발 수행으로 개발자 의존성이 최소화된 표준화된 코드개발
          </div>
          <div>
            이기종 시스템/설비 및 장비(설비)의 모든 데이터를 단일화된 형태의
            표준 인터페이스 데이터 연계로 시스템의 일관된 인터페이스 유지, 관리
            및 인터페이스 복잡성 최소화
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-lg font-semibold sm:text-2xl">
          개발 생산성 향상
        </div>
        <div>
          <div>
            직관적이고 사용이 편리한 다양한 개발도구지원(GUI Modeler, Debugger,
            Remote Agent, Adaptor Register, Web Admin, Code Templates, Code
            Tutorials 등)
          </div>
          <div>
            현장에서 검증된 내장 컴포넌트 제공(약 100여 개) Custom 컴포넌트
            개발을 위한 APIs 제공
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-lg font-semibold sm:text-2xl">
          유연성 및 확장성
        </div>
        <div>
          <div>
            벤더 및 개발자 독립적 시스템 구축에 따른 간편한 유지보수 및 운영
            관리비용 감소 재활용 가능한 컴포넌트들의 Plug & Play 방식 구현
          </div>
          <div>
            OPC, SOAP, TCP/IP, XML, HTTP, RMI, MODBUS, RS232/422/485 등 다양한
            통신 프로토콜 지원
          </div>
          <div>
            Mitsubishi Melsec, Siemens s7, LS산전 Glofa, ABB 등 산업에서 널이
            사용되는 PLC, DCS등에 대한 인터페이스 지원
          </div>
          <div>
            다양한 통합요구에 필요한 1:1, 1:N, M:N 유형의 메시지 전송 방식
            제공으로 다양한 통신 Architecture 모델 구현 가능
          </div>
          <div>
            시스템 연계에 필요한 Adaptor Framework 기반 인프라를 제공하여
            개발자가 손쉽게 Component를 개발 또는 활용 할 수 있도록 지원함으로써
            향후 변화에 유연성 및 확장성 보장
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-lg font-semibold sm:text-2xl">
          이중화 및 Load balancing
        </div>
        <div>
          <div>
            시스템 이상 시 무 중단 운영이 가능하도록 Active-Active,
            Active-Standby 이중화 구성 지원
          </div>
          <div>
            자동 부하조절(Load balancing), 장애감시, 복구기능(Fail-over)
            지원으로 안정적인 통합 시스템 구성
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-lg font-semibold sm:text-2xl">
          산업 Plant, Enterprise 간 최적 통합연계
        </div>
        <div>
          <div>
            산업 Plant에서 필수적인 요소인 실시간으로 제공되는 대용량의 메시지를
            검증된 성능으로 원할하게 처리
          </div>
          <div>
            Plant Floor 데이터의 분석 및 활용을 위하여 Custom Function Call
            기능을 통하여 사용자 Logic 추가 가능
          </div>
          <div>
            산업 Plant의 무정전 운영환경을 고려한 온라인 및 오프라인상에서
            Adaptor 개발 도구 지원
          </div>
        </div>
      </div>
    </div>
  );
};
export default SolutionFeature;
