import { FunctionComponent, memo } from "react";
import CapitalLabel from "./CapitalLabel";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-right text-xs text-ui-text-primary font-cairo ${className}`}
      >
        <div className="w-[968px] flex flex-col items-end justify-start gap-[100px] max-w-full mq750:gap-[25px] mq1050:gap-[50px]">
          <div className="self-stretch h-[443px] relative max-w-full mq1050:h-auto mq1050:min-h-[443]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-ui-on-surface-lv1 box-border w-full overflow-hidden flex flex-row items-end justify-start pt-[23px] px-[30px] pb-[45px] gap-[78px] max-w-full z-[5] border-[2px] border-solid border-gainsboro-200 mq750:gap-[19px] mq1050:flex-wrap mq1050:gap-[39px]">
              <div className="flex-1 shadow-[0px_0px_75px_rgba(0,_0,_0,_0.05)] rounded-3xs bg-whitesmoke-100 box-border overflow-hidden flex flex-col items-start justify-start pt-[11.6px] pb-5 pr-[19px] pl-[66px] gap-[30.5px] min-w-[319px] max-w-full border-[3px] border-solid border-gainsboro-200 mq750:gap-[15px] mq750:pl-[33px] mq750:box-border">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full text-5xl">
                  <div className="w-[339.7px] flex flex-col items-start justify-start gap-[3px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[25px]">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[10px] mq750:flex-wrap">
                        <div className="flex-1 flex flex-col items-end justify-start min-w-[165px] shrink-0 [debug_commit:0448091]">
                          <div className="self-stretch h-[42.4px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                            <h3 className="mb-[-1.2px] m-0 relative text-inherit font-semibold font-inherit shrink-0 [debug_commit:0448091] z-[2] mq450:text-lgi">
                              سيكون اجمالي ارباحك هو
                            </h3>
                          </div>
                          <div className="w-[195px] relative text-xs text-ui-text-secondary inline-block shrink-0 [debug_commit:0448091] z-[2]">
                            هذا هو اعلي عائد استثماري لرأس مالك
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.6px]">
                          <img
                            className="w-[50.7px] h-[49.1px] relative shrink-0 [debug_commit:0448091] z-[2]"
                            alt=""
                            src="/group-1321314605.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[280px] flex flex-row items-start justify-start relative text-45xl text-mediumaquamarine-100">
                      <div className="h-[83px] flex-1 relative font-semibold inline-block [text-shadow:0px_4px_100px_rgba(111,_207,_151,_0.75)] mq1050:text-32xl mq450:text-19xl">
                        1.250.000
                      </div>
                      <div className="absolute !m-[0] bottom-[0px] left-[-52px] text-xs leading-[15px] font-semibold text-ui-text-secondary inline-block min-w-[60px] z-[1]">
                        جنية مصـري
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[343px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                      <div className="relative tracking-[0.25px] leading-[20px] font-semibold inline-block min-w-[77px]">
                        نسبة المخاطرة
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px] font-semibold inline-block min-w-[103px]">
                        العائد علي الاستثمار
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px] font-semibold inline-block min-w-[59px]">
                        نسبة الارباح
                      </div>
                    </div>
                    <div className="w-[292px] flex flex-row items-start justify-between gap-[20px] text-center text-color-green">
                      <div className="w-[81px] flex flex-col items-start justify-start py-0 pr-[35px] pl-0 box-border text-color-yellow">
                        <div className="self-stretch relative leading-[20px] inline-block min-w-[46px]">
                          متوسطة
                        </div>
                      </div>
                      <div className="w-[33px] relative leading-[20px] inline-block shrink-0">
                        125%
                      </div>
                      <div className="w-6 relative leading-[20px] text-right inline-block shrink-0 min-w-[24px]">
                        25%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[332px] flex flex-col items-start justify-start gap-[23px] max-w-full text-mediumaquamarine-200">
                  <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-slategray-300" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px] mq750:flex-wrap">
                      <div className="flex-1 flex flex-col items-end justify-start gap-[1px] min-w-[96px]">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0">
                          <b className="flex-1 relative tracking-[0.25px] leading-[14px] z-[6]">
                            الاستثمار العقاري المباشـر
                          </b>
                        </div>
                        <div className="flex flex-row items-end justify-start gap-[2px] text-3xs text-slategray-400">
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                            <img
                              className="w-[9px] h-[9px] relative z-[8]"
                              alt=""
                              src="/vector-3.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="relative tracking-[0.25px] leading-[20px] font-medium inline-block min-w-[72px] z-[6]">
                              تعرف علي المزيد
                            </div>
                            <div className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[5px] pl-0">
                        <img
                          className="w-[25.8px] h-[21.5px] relative z-[6]"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-ui-text-primary">
                        <div className="relative tracking-[0.25px] leading-[20px] whitespace-pre-wrap inline-block min-w-[112px] z-[6]">
                          هذا العائد من خلال /
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-2.5 w-2.5 absolute !m-[0] top-[179.5px] right-[182px] rounded-[50%] bg-color-yellow box-border z-[2] border-[0px] border-solid border-ui-on-surface-lv1" />
              <div className="w-[335px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[335px] max-w-full text-5xl mq1050:flex-1">
                <div className="self-stretch flex flex-col items-end justify-start gap-[31.5px] mq450:gap-[16px]">
                  <div className="w-[274px] flex flex-col items-end justify-start gap-[22px]">
                    <CapitalLabel
                      prop="اجمالي رأس المال"
                      prop1="ادخل المبلغ واختار العملة"
                      group1321314605="/group-1321314605-1.svg"
                    />
                    <div className="self-stretch rounded-lg bg-ui-surface flex flex-row items-start justify-between py-2.5 pr-[19px] pl-[9px] gap-[20px] text-left text-sm text-gray-400 border-[1px] border-solid border-gainsboro-200 mq450:flex-wrap">
                      <div className="h-[18px] w-[97.1px] relative text-3xs">
                        <img
                          className="absolute top-[4.5px] left-[0px] w-[11px] h-[11px] overflow-hidden z-[1]"
                          loading="lazy"
                          alt=""
                          src="/chevrondown.svg"
                        />
                        <div className="absolute top-[1px] left-[14.1px] leading-[14px] font-semibold flex items-center w-[70px] h-3.5 z-[1]">
                          جنية مصـري
                        </div>
                        <img
                          className="absolute top-[1.5px] left-[71.1px] rounded-180xl-2 w-3.5 h-3.5 overflow-hidden z-[1]"
                          alt=""
                          src="/flag-1.svg"
                        />
                        <div className="absolute top-[0px] left-[96.1px] box-border w-px h-[19px] z-[1] border-r-[1px] border-solid border-gainsboro-300" />
                      </div>
                      <div className="relative leading-[18px] inline-block min-w-[66px]">
                        ادخل المبلغ
                      </div>
                      <div className="h-[19px] w-px relative box-border hidden border-r-[1px] border-solid border-gainsboro-300" />
                      <div className="w-[82px] hidden flex-row items-center justify-end gap-[8px]">
                        <img
                          className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                          alt=""
                          src="/chevrondown-1.svg"
                        />
                        <div className="h-3.5 flex-1 relative leading-[125%] font-semibold flex items-center">
                          EGP
                        </div>
                        <img
                          className="h-2.5 w-3.5 relative object-contain"
                          alt=""
                          src="/flags--us@2x.png"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[5px] text-3xs text-ui-text-secondary">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-ui-text-secondary" />
                        <div className="h-[3px] w-[153px] relative box-border z-[1] ml-[-150px] border-t-[3px] border-solid border-gainsboro-100" />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="w-[52px] relative leading-[15px] inline-block">
                          <p className="m-0">{`اقصـي مبلغ `}</p>
                          <p className="m-0">10.000.000</p>
                        </div>
                        <div className="w-[47px] relative leading-[15px] inline-block">
                          <p className="m-0">{`اقـل مبلــغ `}</p>
                          <p className="m-0">10.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[6px] text-xs text-gray-900 mq450:flex-wrap">
                    <div className="w-[82px] flex flex-col items-end justify-start gap-[1px]">
                      <div className="relative leading-[150%] inline-block min-w-[57px]">
                        فتـرة طويلة
                      </div>
                      <div className="self-stretch relative text-5xs leading-[150%] text-gray-5001 whitespace-pre-wrap inline-block min-w-[82px]">
                        من 3سنوات لي 5 سنوات
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 pb-[13px] pr-[9px] pl-0">
                      <input className="m-0 w-4 h-4" type="checkbox" />
                    </div>
                    <div className="flex-1 flex flex-col items-end justify-start gap-[20px] min-w-[140px]">
                      <CapitalLabel
                        prop="فتـرة الاستثمار"
                        prop1="ادخل الفتـرة المناسبة لك"
                        group1321314605="/group-1321314605-2.svg"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[31px]">
                            <div className="flex flex-row items-start justify-start gap-[6px]">
                              <div className="relative leading-[150%] inline-block min-w-[72px]">
                                فتـرة متوسطة
                              </div>
                              <input
                                className="m-0 h-[18px] w-4"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[6px]">
                              <div className="relative leading-[150%] inline-block min-w-[62px]">
                                فتـرة قصيـرة
                              </div>
                              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/checkboxes.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[193px] flex flex-row items-start justify-between gap-[20px] text-5xs text-gray-5001">
                          <div className="w-[78px] relative leading-[150%] inline-block shrink-0">
                            من سنة لي 3 سنوات
                          </div>
                          <div className="w-[78px] relative leading-[150%] inline-block shrink-0">
                            من 6 اشهر لي سنة
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[399px] left-[182px] shadow-[0px_10px_75px_rgba(111,_207,_151,_0.5)] rounded-md w-[171px] h-11 flex flex-row items-start justify-start z-[6]">
              <div className="h-12 flex-1 shadow-[0px_1px_2px_rgba(198,_228,_246,_0.05)] rounded-lg bg-mediumaquamarine-200 box-border overflow-hidden flex flex-row items-start justify-start py-3 px-2.5 gap-[8px] border-[2px] border-solid border-seagreen">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowleft.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-base leading-[100%] font-medium font-cairo text-white text-left inline-block min-w-[122px]">
                    ابداء الاستثمار الأن
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-41xl text-gray1-500">
            <div className="w-[503px] flex flex-col items-start justify-start gap-[75px] max-w-full mq750:gap-[37px] mq450:gap-[19px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-row items-start justify-start py-0 pr-[19px] pl-[18px]">
                  <h1 className="m-0 relative text-inherit tracking-[-0.2px] leading-[100px] font-extrabold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#192847,_#28478b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[4] mq1050:text-29xl mq1050:leading-[80px] mq450:text-17xl mq450:leading-[60px]">
                    قم بالتسجيل الأن
                  </h1>
                </div>
                <div className="self-stretch relative text-xl-5 leading-[35px] text-right z-[3] mq450:text-base mq450:leading-[26px]">
                  <span className="font-medium">{`وسيقوم احد المستشارين بتواصل معك `}</span>
                  <span className="font-semibold">خلال ساعة من الأن</span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-7 box-border max-w-full">
                <form className="m-0 flex-1 rounded-xl bg-ui-on-surface-lv1 box-border flex flex-col items-start justify-start pt-9 pb-[19px] pr-9 pl-10 gap-[33px] max-w-full z-[3] border-[3px] border-solid border-gainsboro-200 mq450:gap-[16px]">
                  <div className="w-[446px] h-[286px] relative rounded-xl bg-ui-on-surface-lv1 box-border hidden max-w-full border-[3px] border-solid border-gainsboro-200" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                      <div className="flex-1 flex flex-col items-center justify-start gap-[8px] max-w-full z-[1]">
                        <div className="self-stretch relative text-sm leading-[150%] font-medium font-cairo text-ui-text-primary text-right">
                          الاسم
                        </div>
                        <div className="self-stretch rounded-lg bg-gray-50 box-border flex flex-row items-center justify-end py-2.5 px-[15px] max-w-full border-[1px] border-solid border-gray-300">
                          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
                            <div className="h-[18px] flex-1 relative text-sm leading-[125%] font-cairo text-gray-500 text-right flex items-center max-w-full" />
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-[15px] w-[13px] absolute !m-[0] right-[12px] bottom-[15px] z-[2]"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div className="self-stretch h-[71px] relative max-w-full">
                      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-center justify-start gap-[8px] max-w-full h-full z-[1]">
                        <input
                          className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-medium font-cairo text-sm bg-[transparent] self-stretch h-[21px] relative leading-[150%] text-ui-text-primary text-right inline-block min-w-[218px] p-0"
                          placeholder="رقم الهاتف"
                          type="text"
                        />
                        <div className="self-stretch rounded-lg bg-gray-50 box-border flex flex-row items-center justify-end py-2.5 px-[15px] max-w-full border-[1px] border-solid border-gray-300">
                          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
                            <div className="h-[18px] flex-1 relative text-sm leading-[125%] font-cairo text-gray-500 text-right flex items-center max-w-full" />
                          </div>
                        </div>
                      </div>
                      <img
                        className="absolute top-[41px] left-[333px] w-6 h-6 overflow-hidden z-[2]"
                        alt=""
                        src="/solarphonebold.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[39px] flex flex-row items-start justify-center">
                    <button className="cursor-pointer pt-1 px-[15px] pb-1.5 bg-light h-[43px] w-[90px] shadow-[0px_4px_50px_rgba(76,_108,_178,_0.5)] rounded-lg box-border flex flex-row items-start justify-start z-[1] border-[2px] border-solid border-darkslateblue hover:bg-slategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-steelblue-100">
                      <div className="h-[43px] w-[90px] relative shadow-[0px_4px_50px_rgba(76,_108,_178,_0.5)] rounded-lg bg-light box-border hidden border-[2px] border-solid border-darkslateblue" />
                      <div className="relative text-xl leading-[29px] font-medium font-cairo text-white text-center inline-block min-w-[56px] z-[1] mq450:text-base mq450:leading-[23px]">
                        تسجيل
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FrameComponent;
