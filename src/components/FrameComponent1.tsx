import { FunctionComponent, memo } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`w-[1191px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border top-[0] z-[99] sticky max-w-full text-right text-xl font-body-1-m ${className}`}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[30px] pl-5 box-border max-w-full lg:hidden">
            <div className="h-[30px] w-[378px] relative leading-[150%] font-medium inline-block whitespace-nowrap max-w-full z-[6] mq450:text-base mq450:leading-[24px]">
              اهلاً بك, في أول منصة استثمار معتمدة في مصر
            </div>
          </div>
          <header className="self-stretch shadow-[0px_5px_150px_rgba(76,_108,_178,_0.25)] rounded-2xl [background:linear-gradient(0deg,_#f4f4f4,_#ededed)] box-border flex flex-row items-start justify-between pt-4 pb-[17px] pr-[37px] pl-5 gap-[20px] max-w-full z-[6] text-center text-lg text-gray1-300 font-cairo border-[0px] border-solid border-light">
            <img
              className="h-[70px] w-[1188px] relative rounded-2xl hidden max-w-full"
              alt=""
              src="/rectangle-34624123.svg"
            />
            <div className="w-[173.3px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <img
                className="self-stretch h-[34px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[510.6px] flex flex-col items-start justify-start pt-1 pb-0 pr-[39px] pl-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-0 relative gap-[30px] z-[1]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <div className="h-[21px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                    <div className="ml-[-0.4px] relative leading-[150%] font-medium inline-block min-w-[58px]">
                      المدونة
                    </div>
                  </div>
                </div>
                <div className="flex-[0.9524] flex flex-col items-start justify-start pt-[1.5px] pb-0 pr-1.5 pl-0 text-light">
                  <div className="h-[21px] flex flex-row items-start justify-start pt-0 px-0.5 pb-0 box-border">
                    <div className="relative leading-[150%] font-medium inline-block min-w-[115px] whitespace-nowrap">
                      المساعد الذكي
                    </div>
                  </div>
                </div>
                <div className="h-6 flex-1 relative">
                  <div className="absolute top-[0px] left-[8.5px] h-5 flex flex-row items-start justify-start pt-0 px-1 pb-0 box-border">
                    <div className="relative leading-[150%] font-medium inline-block min-w-[104px] whitespace-nowrap">
                      تحديث الأسعار
                    </div>
                  </div>
                  <img
                    className="absolute top-[12.6px] left-[121.4px] w-[6.3px] h-[5.8px] z-[7]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <div className="h-[21px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                    <div className="ml-[-0.4px] relative leading-[150%] font-medium inline-block min-w-[58px]">
                      الرئيسية
                    </div>
                  </div>
                </div>
                <img
                  className="h-[11px] w-[23px] absolute !m-[0] top-[-6px] left-[184px] z-[7]"
                  loading="lazy"
                  alt=""
                  src="/group-289388.svg"
                />
                <img
                  className="h-5 w-5 absolute !m-[0] right-[215px] bottom-[-2px] z-[7]"
                  loading="lazy"
                  alt=""
                  src="/line-roundedchevron-down.svg"
                />
              </div>
            </div>
            <div className="w-[116px] shadow-[0px_5px_5px_rgba(8,_15,_52,_0.04)] rounded-lg bg-gray1-400 flex flex-row items-center justify-center py-[7.5px] px-[9px] box-border z-[1] text-left text-white">
              <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[10px_8px]">
                <img
                  className="h-1 w-2 relative"
                  loading="lazy"
                  alt=""
                  src="/chevron.svg"
                />
                <div className="flex flex-row items-center justify-center gap-[7px]">
                  <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[50px]">
                    العربية
                  </a>
                  <img
                    className="h-[22px] w-[22px] relative rounded-180xl-2 overflow-hidden shrink-0 min-h-[22px]"
                    loading="lazy"
                    alt=""
                    src="/flag.svg"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
);

export default FrameComponent1;
