import { FunctionComponent, memo } from "react";

export type PageFooterType = {
  className?: string;
};

const PageFooter: FunctionComponent<PageFooterType> = memo(
  ({ className = "" }) => {
    return (
      <footer
        className={`self-stretch flex flex-col items-end justify-start gap-[42.6px] max-w-full text-right text-base text-light font-cairo mq750:gap-[21px] ${className}`}
      >
        <div className="self-stretch shadow-[0px_0px_150px_rgba(76,_108,_178,_0.1)] rounded-2xl [background:linear-gradient(0deg,_#f4f4f4,_#ededed)] box-border overflow-hidden flex flex-col items-start justify-start pt-[55px] pb-[71px] pr-[51px] pl-[54px] gap-[49.9px] shrink-0 [debug_commit:0448091] max-w-full z-[3] border-[3px] border-solid border-light lg:pl-[27px] lg:pr-[25px] lg:box-border mq750:gap-[25px] mq750:pt-9 mq750:pb-[46px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 box-border max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[342px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-end justify-start pt-[34.7px] pb-[33.5px] pr-[46px] pl-[38px] relative gap-[20.2px] mq450:pr-5 mq450:box-border">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[-4px] bottom-[-4px] left-[0px] rounded-2xl bg-silver box-border mix-blend-normal border-[2px] border-solid border-gray1-600" />
                <b className="w-[248px] relative leading-[28px] inline-block z-[1]">
                  اشترك في النشرة الاخبارية
                </b>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-1">
                  <div className="flex-1 rounded-md bg-gainsboro-400 flex flex-row items-start justify-between py-0 pr-0 pl-[15px] gap-[20px] z-[1] mq450:flex-wrap mq450:pr-[15px] mq450:pb-[15px] mq450:box-border">
                    <img
                      className="self-stretch w-[248px] relative rounded-md max-h-full hidden min-h-[54px]"
                      alt=""
                      src="/fill.svg"
                    />
                    <input
                      className="w-[84px] [border:none] [outline:none] bg-[transparent] h-[32.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border font-cairo text-sm text-slategray-100"
                      placeholder="Email address"
                      type="text"
                    />
                    <div className="h-[54.2px] w-[50px] relative bg-goldenrod-100 z-[1]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full hidden"
                        alt=""
                        src="/fill1.svg"
                      />
                      <img
                        className="absolute top-[20.6px] left-[18px] w-[15.3px] h-[14.1px] object-contain z-[2]"
                        alt=""
                        src="/arrowsdowntopmove1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[88.9px] relative text-xs leading-[20.4px] text-gray1-700 inline-block shrink-0 z-[1]">
                  <p className="m-0">{`اشترك في النشرة الاخبارية لي الاطلاع علي احدث اسعار العملات والذهب وتحليل السوق العقاري `}</p>
                  <p className="m-0">وأخر تحديثات البورصة المصرية.</p>
                </div>
              </div>
            </div>
            <div className="w-[77px] flex flex-col items-end justify-start gap-[18.6px]">
              <b className="w-[73px] relative leading-[28px] inline-block">
                الشركة
              </b>
              <div className="self-stretch flex flex-col items-end justify-start gap-[4.7px] text-gray1-800">
                <div className="w-16 relative inline-block">من نحن</div>
                <div className="w-14 relative inline-block">وظائف</div>
                <div className="self-stretch relative leading-[21.7px] inline-block min-w-[77px]">
                  تواصل معنا
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[15px] text-left">
              <div className="flex flex-row items-start justify-start py-0 pr-px pl-2.5">
                <b className="relative leading-[28px] inline-block min-w-[99px]">
                  صفحات تهمك
                </b>
              </div>
              <div className="flex flex-col items-end justify-start gap-[2px] text-right text-gray1-800">
                <div className="flex flex-row items-start justify-end py-0 px-px">
                  <div className="relative inline-block min-w-[84px]">
                    اسعار الذهب
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-px">
                  <div className="relative inline-block min-w-[94px]">
                    اسعار العملات
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-px">
                  <div className="relative inline-block min-w-[96px]">
                    اسعار العقارات
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 pr-px pl-0">
                  <div className="relative inline-block min-w-[109px]">
                    الشهادات البنكية
                  </div>
                </div>
                <div className="relative inline-block min-w-[105px]">
                  البورصة المصرية
                </div>
              </div>
            </div>
            <div className="w-[121px] flex flex-col items-end justify-start gap-[15px]">
              <b className="relative leading-[28px] inline-block min-w-[64px]">
                الصفحات
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px] text-gray1-800">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="relative inline-block min-w-[51px]">
                    الرئيسية
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                    <img
                      className="w-[23px] h-[11px] relative"
                      alt=""
                      src="/group-289388.svg"
                    />
                  </div>
                  <div className="relative inline-block min-w-[91px]">
                    تحديث الأسعار
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5">
                  <div className="relative inline-block min-w-[101px]">
                    المساعد الذكي
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end text-left">
                  <div className="relative inline-block min-w-[51px]">
                    المدونة
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[25.9px] max-w-full text-left text-sm">
            <div className="self-stretch h-[1.1px] relative bg-gray1-900" />
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[122px] max-w-full lg:gap-[61px] mq750:gap-[30px] mq450:gap-[15px]">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <img
                  className="h-[34px] w-[186px] relative"
                  loading="lazy"
                  alt=""
                  src="/logo.svg"
                />
                <div className="w-[328px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="h-[19.5px] relative font-medium inline-block min-w-[46px]">
                      اتصل بنا
                    </div>
                    <div className="h-[19.5px] relative font-medium inline-block min-w-[97px]">
                      سياسية الخصوية
                    </div>
                    <div className="h-[19.5px] relative font-medium inline-block min-w-[105px]">
                      اتفاقية الاستخدام
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[263px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                <img
                  className="self-stretch h-[25px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-289391.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-center text-gray1-1000 font-body-1-m">
          <div className="relative mix-blend-normal shrink-0 [debug_commit:0448091] z-[3]">
            © Copyright 2024 - Fib Marketing
          </div>
        </div>
      </footer>
    );
  }
);

export default PageFooter;
