import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import PageFooter from "../components/PageFooter";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-px pb-[72px] pr-5 pl-[27px] box-border gap-[148px] leading-[normal] tracking-[normal] text-left text-5xl text-white font-cairo lg:gap-[74px] mq750:gap-[37px] mq450:gap-[18px]">
      <div className="w-[1612px] h-[831px] relative hidden max-w-full z-[0]">
        <div className="absolute top-[666px] left-[806px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(73,_118,_233,_0.18)_-2.47deg,_#316bff_1.81deg,_#032886_76.1deg,_rgba(19,_22,_26,_0.13)_121.11deg,_rgba(7,_11,_22,_0)_300.72deg,_rgba(0,_0,_0,_0)_349.73deg,_rgba(73,_118,_233,_0.18)_357.53deg,_#316bff_361.81deg)] w-[666px] h-[792px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[666px] left-[14px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(73,_118,_233,_0.18)_-2.47deg,_#316bff_1.81deg,_#032886_76.1deg,_rgba(19,_22,_26,_0.13)_121.11deg,_rgba(7,_11,_22,_0)_300.72deg,_rgba(0,_0,_0,_0)_349.73deg,_rgba(73,_118,_233,_0.18)_357.53deg,_#316bff_361.81deg)] w-[666px] h-[792px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[394px] left-[0px] [filter:blur(132px)] [backdrop-filter:blur(200px)] bg-gray1-100 w-[1612px] h-[437px]" />
      </div>
      <div className="w-[675px] h-[675px] relative [filter:blur(600px)] rounded-[50%] bg-tomato-200 hidden max-w-full z-[1]" />
      <div className="w-[675px] h-[675px] relative [filter:blur(600px)] rounded-[50%] bg-goldenrod-200 hidden max-w-full z-[2]" />
      <div className="w-[1440px] h-[37px] relative overflow-hidden shrink-0 hidden max-w-full z-[3] font-body-medium mq450:h-auto mq450:min-h-[37]">
        <b className="absolute top-[21px] left-[40px] hidden mq450:text-lgi">
          <span>Quickly</span>
          <span className="text-paleturquoise">.</span>
        </b>
        <div className="absolute top-[25px] left-[476px] hidden flex-row items-start justify-start gap-[31.8px] max-w-full text-base text-gray1-200 mq450:flex-wrap">
          <div className="h-6 relative leading-[150%] inline-block">Home</div>
          <div className="h-6 relative leading-[150%] text-white inline-block">
            Live price
          </div>
          <div className="h-6 relative leading-[150%] inline-block">
            Assistant
          </div>
          <div className="h-6 relative leading-[150%] inline-block">Blog</div>
          <div className="h-6 relative leading-[150%] inline-block">
            Property
          </div>
        </div>
        <div className="absolute top-[17px] left-[1246px] hidden flex-row items-start justify-start py-0 pr-[27px] pl-0 gap-[12px] text-sm">
          <div className="flex-1 rounded-lg bg-steelblue-200 overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 whitespace-nowrap">
            <div className="h-[21px] flex-1 relative leading-[150%] font-semibold inline-block">
              Free Consultant
            </div>
          </div>
          <div className="rounded-lg bg-dark-green overflow-hidden hidden flex-row items-start justify-start py-2.5 px-4 whitespace-nowrap">
            <div className="relative leading-[150%]">Log In</div>
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <div className="w-[968px] h-[421px] relative rounded-xl bg-ui-on-surface-lv1 box-border overflow-hidden shrink-0 hidden max-w-full z-[5] text-right text-xs text-ui-text-secondary border-[2px] border-solid border-gainsboro-200">
        <div className="absolute top-[26px] left-[30px] shadow-[0px_0px_75px_rgba(0,_0,_0,_0.05)] rounded-3xs bg-whitesmoke-100 box-border w-[491px] h-[353px] overflow-hidden text-ui-text-primary border-[3px] border-solid border-gainsboro-200">
          <div className="absolute top-[79px] left-[123px] text-45xl font-semibold text-mediumaquamarine-100 inline-block w-[280px] h-[83px] [text-shadow:0px_4px_100px_rgba(111,_207,_151,_0.75)] mq1050:text-32xl mq450:text-19xl">
            1.250.000
          </div>
          <div className="absolute top-[147px] left-[71px] leading-[15px] font-semibold text-ui-text-secondary inline-block w-[60px] h-[15px] min-w-[60px]">
            جنية مصـري
          </div>
          <div className="absolute top-[192px] left-[343px] tracking-[0.25px] leading-[20px] font-semibold inline-block min-w-[59px]">
            نسبة الارباح
          </div>
          <div className="absolute top-[218px] left-[378px] leading-[20px] text-color-green inline-block w-6 h-[18px] min-w-[24px]">
            25%
          </div>
          <div className="absolute top-[192px] left-[198px] tracking-[0.25px] leading-[20px] font-semibold inline-block min-w-[103px]">
            العائد علي الاستثمار
          </div>
          <div className="absolute top-[218px] left-[268px] leading-[20px] text-color-green text-center inline-block w-[33px] h-[18px]">
            125%
          </div>
          <div className="absolute top-[192px] left-[79px] tracking-[0.25px] leading-[20px] font-semibold inline-block min-w-[77px]">
            نسبة المخاطرة
          </div>
          <div className="absolute top-[218px] left-[110px] leading-[20px] text-color-yellow text-center inline-block w-[46px] h-[18px] min-w-[46px]">
            متوسطة
          </div>
          <div className="absolute top-[267px] left-[69px] box-border w-[334px] h-0.5 border-t-[2px] border-solid border-slategray-300" />
          <div className="absolute top-[11.6px] left-[148px] text-5xl font-semibold inline-block w-[254px] h-[43.6px] mq450:text-lgi">
            سيكون اجمالي ارباحك هو
          </div>
          <div className="absolute top-[54px] left-[207px] text-ui-text-secondary inline-block w-[195px] h-[22px]">
            هذا هو اعلي عائد استثماري لرأس مالك
          </div>
          <img
            className="absolute top-[22.3px] left-[412px] w-[50.7px] h-[49.1px]"
            alt=""
            src="/group-1321314605.svg"
          />
        </div>
        <div className="absolute top-[30px] left-[694.3px] text-5xl text-ui-text-primary mq450:text-lgi">
          اجمالي رأس المال
        </div>
        <div className="absolute top-[74px] left-[746.3px] inline-block min-w-[121px]">
          ادخل المبلغ واختار العملة
        </div>
        <img
          className="absolute top-[41px] left-[877.3px] w-[50.7px] h-[50.7px]"
          alt=""
          src="/group-1321314605-1.svg"
        />
        <div className="absolute top-[116px] left-[764px] w-[164px] h-[45px] text-center text-sm text-gray-4001">
          <div className="absolute top-[6px] left-[0px] rounded-md bg-ui-surface box-border w-[164px] h-[34px] border-[1px] border-solid border-ui-stroke" />
          <img
            className="absolute top-[22px] left-[9px] w-2 h-1"
            alt=""
            src="/chevron-1.svg"
          />
          <div className="absolute top-[14px] left-[21px] tracking-[-0.5px] leading-[18px] inline-block min-w-[23px]">
            جنية
          </div>
          <div className="absolute top-[0px] left-[51px] text-5xl text-ui-text-secondary text-right inline-block min-w-[105px] mq450:text-lgi">
            1.000.000
          </div>
        </div>
        <div className="absolute top-[193px] left-[881px] text-3xs leading-[15px]">
          <p className="m-0">{`اقـل مبلــغ `}</p>
          <p className="m-0">10.000</p>
        </div>
        <div className="absolute top-[193px] left-[654px] text-3xs leading-[15px]">
          <p className="m-0">{`اقصـي مبلغ `}</p>
          <p className="m-0">10.000.000</p>
        </div>
        <div className="absolute top-[185px] left-[655px] w-[273px] h-[3px]">
          <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[3px] border-solid border-ui-text-secondary" />
          <div className="absolute top-[0px] left-[123px] box-border w-[153px] h-[3px] border-t-[3px] border-solid border-gainsboro-100" />
        </div>
        <div className="absolute top-[181px] left-[776px] rounded-[50%] bg-color-yellow box-border w-2.5 h-2.5 border-[0px] border-solid border-ui-on-surface-lv1" />
        <div className="absolute top-[253px] left-[727px] text-5xl text-ui-text-primary mq450:text-lgi">
          فتـرة الاستثمار
        </div>
        <div className="absolute top-[297px] left-[748px] inline-block min-w-[119px]">
          ادخل الفتـرة المناسبة لك
        </div>
        <img
          className="absolute top-[264px] left-[877px] w-[50.7px] h-[50.7px]"
          alt=""
          src="/group-1321314605-2.svg"
        />
        <div className="absolute top-[358px] left-[827px] text-5xs leading-[150%] text-gray-5001 inline-block w-[78px]">
          من 6 اشهر لي سنة
        </div>
        <div className="absolute top-[339px] left-[843px] leading-[150%] text-gray-900 inline-block min-w-[62px]">
          فتـرة قصيـرة
        </div>
        <img
          className="absolute top-[341px] left-[911px] w-4 h-4"
          alt=""
          src="/checkboxes.svg"
        />
        <div className="absolute top-[358px] left-[712px] text-5xs leading-[150%] text-gray-5001 inline-block w-[78px]">
          من سنة لي 3 سنوات
        </div>
        <div className="absolute top-[339px] left-[718px] leading-[150%] text-gray-900 inline-block min-w-[72px]">
          فتـرة متوسطة
        </div>
        <input
          className="m-0 absolute top-[341px] left-[796px] w-4 h-4"
          type="checkbox"
        />
        <div className="absolute top-[358px] left-[593px] text-5xs leading-[150%] text-gray-5001 whitespace-pre-wrap inline-block w-[82px] min-w-[82px]">
          من 3سنوات لي 5 سنوات
        </div>
        <div className="absolute top-[339px] left-[618px] leading-[150%] text-gray-900 inline-block min-w-[57px]">
          فتـرة طويلة
        </div>
        <input
          className="m-0 absolute top-[341px] left-[681px] w-4 h-4"
          type="checkbox"
        />
      </div>
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute top-[-3px] left-[-1px] [background:linear-gradient(0deg,_#f4f4f4,_#ededed)] w-[1441px] h-[4292px] z-[2]" />
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[2826.4px] z-[3]"
          alt=""
        />
        <img
          className="absolute top-[-152px] left-[96px] w-[1248px] h-[1248px] z-[5]"
          alt=""
          src="/group-1000001768.svg"
        />
        <div className="absolute top-[293px] left-[603px] rounded-xl bg-whitesmoke-200 w-[233px] h-[34px] z-[6]" />
        <section className="absolute top-[1999px] left-[212px] w-[1015px] h-[212px] z-[4] text-center text-41xl text-gray1-500 font-cairo">
          <h1 className="m-0 absolute top-[43px] left-[121px] text-inherit tracking-[-0.2px] leading-[100px] font-extrabold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#192847,_#28478b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[5] mq1050:text-29xl mq1050:leading-[80px] mq450:text-17xl mq450:leading-[60px]">
            ابدأ بتجربة حساب عوائدك الآن
          </h1>
          <div className="absolute top-[139px] left-[154px] text-xl-5 leading-[33px] font-medium flex items-center justify-center w-[701px] h-[83px] z-[6] mq450:text-base mq450:leading-[26px]">
            قم بأدخال المعطيات المنسبة لك وسيقوم المساعد الذكي بحساب افضل
            استثمار لك.
          </div>
        </section>
        <img
          className="absolute top-[1220px] left-[879px] w-[29px] h-[29px] overflow-hidden z-[7]"
          loading="lazy"
          alt=""
          src="/maplawyer.svg"
        />
        <img
          className="absolute top-[1220px] left-[645px] w-[29px] h-[29px] overflow-hidden z-[7]"
          loading="lazy"
          alt=""
          src="/hugeiconsmarketanalysis.svg"
        />
        <img
          className="absolute top-[1221px] left-[413px] w-[26px] h-[26px] overflow-hidden z-[7]"
          loading="lazy"
          alt=""
          src="/tdesignmoney.svg"
        />
        <div className="absolute top-[1682px] left-[374px] w-10 h-10 z-[4] flex items-center justify-center">
          <img
            className="w-full h-full z-[4] object-contain absolute left-[0px] top-[0px] [transform:scale(6)]"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="absolute top-[1677px] left-[694px] w-[50px] h-[50px] z-[4] flex items-center justify-center">
          <img
            className="w-full h-full z-[4] object-contain absolute left-[0px] top-[4px] [transform:scale(5)]"
            alt=""
            src="/icon-1.svg"
          />
        </div>
        <div className="absolute top-[1679px] left-[1020px] w-12 h-12 z-[4] flex items-center justify-center">
          <img
            className="w-full h-full z-[4] object-contain absolute left-[0px] top-[4px] [transform:scale(5.167)]"
            loading="lazy"
            alt=""
            src="/group-1321314630.svg"
          />
        </div>
      </main>
      <div className="w-[1182px] flex flex-col items-end justify-start gap-[152px] max-w-full text-sm text-darkslategray-100 lg:gap-[76px] mq750:gap-[38px] mq450:gap-[19px]">
        <div className="w-[1098px] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-3.5 w-3.5 absolute !m-[0] bottom-[121px] left-[501px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/streamlinemoneygrapharrowincreaseascendgrowthuparrowstatsgraphrightgrow.svg"
          />
          <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[178px] box-border max-w-full lg:pb-[116px] lg:box-border mq1050:pb-[75px] mq1050:box-border mq450:pb-[49px] mq450:box-border">
            <div className="w-[1015px] flex flex-col items-start justify-start gap-[85px] max-w-full mq750:gap-[21px] mq1050:gap-[42px]">
              <div className="w-[1004px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full font-body-1-m">
                <div className="w-[612px] flex flex-col items-end justify-start gap-[10px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                    <div className="w-[221px] shadow-[0px_4px_150px_rgba(245,_63,_63,_0.25)] rounded-xl [background:linear-gradient(90deg,_#f9f9f9,_#f4f4f4)] box-border flex flex-row items-start justify-start py-px pr-px pl-[7px] gap-[9.6px] z-[7] border-[1px] border-solid border-darkslategray-200">
                      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="self-stretch flex flex-row items-end justify-start">
                          <div className="flex-1 relative tracking-[-0.1px] leading-[20px] font-medium z-[1]">
                            بواسطة الذكاء الاصطناعي
                          </div>
                          <div className="flex flex-row items-start justify-start py-[5.3px] px-[7px] box-border [transform:_rotate(180deg)] w-[18px] h-[18px] ml-[-0.6px]">
                            <img
                              className="h-[7.5px] w-[3.8px] relative [transform:_rotate(-180deg)]"
                              alt=""
                              src="/vector-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-tomato-100 flex flex-row items-start justify-start pt-0.5 pb-1 pr-2 pl-2.5 text-white font-cairo">
                        <div className="relative tracking-[-0.1px] leading-[20px] font-medium inline-block min-w-[27px]">
                          جديد
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start gap-[30px] text-center text-[75px] text-gray1-500 font-cairo">
                    <div className="relative tracking-[-0.2px] leading-[100px] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#192847,_#28478b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[6] mq1050:text-41xl mq1050:leading-[80px] mq450:text-[45px] mq450:leading-[60px]">
                      <p className="m-0">احسـب العائد علـي</p>
                      <p className="m-0 text-[73.5px]">استثمارك العقاري</p>
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 px-[53px] text-xl mq750:pl-[26px] mq750:pr-[26px] mq750:box-border">
                      <div className="w-[496px] relative leading-[33px] font-medium flex items-center z-[6] mq450:text-base mq450:leading-[26px]">
                        <span className="w-full">
                          <p className="m-0">
                            <span className="text-xl-5">
                              دلوقتـي تقدر تحسب ارباحك في الاستثمار العقاري عن
                              طريق
                            </span>
                            <span>{` `}</span>
                          </p>
                          <p className="m-0">
                            المساعد الذكي المزود بأحدث بيانات السوق العقاري
                            المصـري
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-ui-text-secondary">
                <div className="h-[710px] flex-1 shadow-[0px_0px_250px_rgba(76,_108,_178,_0.1)] rounded-2xl bg-ui-on-surface-lv1 box-border overflow-hidden flex flex-col items-end justify-between p-6 max-w-full z-[6] border-[4px] border-solid border-gainsboro-200 mq1050:h-auto mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-11 gap-[50px] shrink-0 mq750:gap-[25px] mq750:pb-[29px] mq750:box-border">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/arrowsquareleft.svg"
                      />
                      <div className="w-[120px] rounded-xl box-border flex flex-row items-center justify-start py-[5px] px-3.5 gap-[8px] border-[2px] border-solid border-ui-stroke">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/dropdownchevron.svg"
                        />
                        <div className="relative tracking-[-0.01em] leading-[24px] font-semibold inline-block min-w-[64px]">
                          وضع الخبيـر
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start py-0 px-6 gap-[60px] text-right text-29xl text-ui-text-primary mq1050:gap-[30px]">
                      <div className="self-stretch relative tracking-[-0.03em] leading-[56px] font-semibold mq1050:text-19xl mq1050:leading-[45px] mq450:text-[29px] mq450:leading-[34px]">
                        <p className="m-0">
                          <span>
                            <span>{`صباح الخيـر, `}</span>
                            <span className="text-[40px]">👋</span>
                          </span>
                        </p>
                        <p className="m-0 text-ui-text-secondary">
                          اقدر اساعدك ازاي اليوم
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-0 gap-[16px] text-lg mq1050:flex-wrap">
                        <div className="flex-1 rounded-xl bg-color-shades-yellow-50 overflow-hidden flex flex-col items-end justify-between p-8 box-border min-w-[163px] max-w-[218px] min-h-[296px]">
                          <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch relative tracking-[-0.02em] leading-[32px]">
                              مستشار استثماري
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-medium">
                              يقدم نصائح استثمارية مخصصة بناءً على أهداف العميل
                              الفردية، وتحمل المخاطر، وظروف السوق. يساعد العملاء
                              في بناء وإدارة محافظهم الاستثمارية العقارية.
                            </div>
                          </div>
                          <img
                            className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0"
                            alt=""
                            src="/featureiconcontainersmarttrade.svg"
                          />
                        </div>
                        <div className="flex-1 rounded-xl bg-color-shades-purple-100 overflow-hidden flex flex-col items-end justify-between p-8 box-border min-w-[163px] max-w-[218px] min-h-[296px] text-left mq1050:min-h-[auto]">
                          <div className="self-stretch h-[113px] flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
                            <div className="relative tracking-[-0.02em] leading-[32px] inline-block min-w-[90px]">
                              محلل عقاري
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-medium text-right">
                              يجري أبحاث السوق، يحلل اتجاهات العقارات، ويقيّم
                              فرص الاستثمار المحتملة. يقدم رؤى وتوقعات مستندة
                              إلى البيانات لدعم قرارات الاستثمار.
                            </div>
                          </div>
                          <img
                            className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0"
                            alt=""
                            src="/featureiconcontainerbulkalerts.svg"
                          />
                        </div>
                        <div className="flex-1 rounded-xl bg-color-shades-green-100 overflow-hidden flex flex-col items-end justify-between p-8 box-border min-w-[163px] max-w-[218px] min-h-[296px] text-left mq1050:min-h-[auto]">
                          <div className="self-stretch h-[113px] flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
                            <div className="relative tracking-[-0.02em] leading-[32px] inline-block min-w-[107px]">
                              محامي عقارات
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-medium text-right">
                              يقدم مشورة قانونية حول المعاملات العقارية، يحرر
                              ويراجع العقود، يضمن الامتثال لللوائح المحلية،
                              ويتولى أي نزاعات قانونية قد تنشأ.
                            </div>
                          </div>
                          <img
                            className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0"
                            alt=""
                            src="/featureiconcontaineralerts.svg"
                          />
                        </div>
                        <div className="flex-1 rounded-xl bg-color-shades-brand-100 overflow-hidden flex flex-col items-end justify-between p-8 box-border min-w-[163px] max-w-[218px] min-h-[296px] mq1050:min-h-[auto]">
                          <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
                            <div className="self-stretch relative tracking-[-0.02em] leading-[32px]">
                              خبير تقيم عقاري
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-medium">
                              يقيم العقارات من خلال إجراء تفتيشات شاملة وتحليل
                              بيانات المبيعات المقارنة. يقدم تقييمات موضوعية
                              لدعم قرارات الشراء والبيع.
                            </div>
                          </div>
                          <img
                            className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/featureiconcontainerautowithdraw.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-mini text-ui-text-primary font-body-1-m">
                    <div className="self-stretch rounded-[48px] bg-ui-surface overflow-hidden flex flex-row items-center justify-between py-1 pr-1 pl-[5px] gap-[20px] mq450:flex-wrap">
                      <div className="h-10 w-10 rounded-[40px] bg-color-text-brand overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="h-6 w-6 relative object-contain"
                          loading="lazy"
                          alt=""
                          src="/querysubmitbuttonicon.svg"
                        />
                      </div>
                      <div className="w-[166px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[6px]">
                        <img
                          className="self-stretch w-0.5 relative rounded-sm max-h-full min-h-[24px]"
                          alt=""
                          src="/queryinputdivider.svg"
                        />
                        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-medium">
                            اسعار العقارت اليوم
                          </div>
                          <img
                            className="h-6 w-6 relative rounded-3xl overflow-hidden shrink-0 object-cover min-h-[24px]"
                            loading="lazy"
                            alt=""
                            src="/querystatusiconcontainer@2x.png"
                          />
                        </div>
                        <img
                          className="self-stretch w-0.5 relative rounded-sm max-h-full min-h-[24px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[65px] pr-[22px] pl-5 text-center text-45xl">
                <h1 className="m-0 relative text-inherit tracking-[-0.2px] leading-[100px] font-extrabold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#192847,_#28478b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[4] mq1050:text-32xl mq1050:leading-[80px] mq450:text-19xl mq450:leading-[60px]">
                  ماهو المساعد الذكي!
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[58px] pl-[57px] box-border max-w-full text-right text-5xl text-ui-text-primary mq1050:pl-7 mq1050:pr-[29px] mq1050:box-border">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[75px] max-w-full mq1050:gap-[37px] mq450:gap-[19px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[187px] text-center">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px]">
                      <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit z-[4] mq450:text-lgi mq450:leading-[27px]">
                        المساعدة والارشاد
                      </h3>
                    </div>
                    <div className="self-stretch relative text-base leading-[28px] text-ui-text-secondary z-[4]">
                      المساعد الذكي سيقدم لك الإرشاد اللازم لاتخاذ أفضل القرارات
                      الاستثمارية في السوق المصري، معتمداً على تحليل بيانات
                      السوق بدقة ومساعدة الذكاء الاصطناعي.
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[187px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit z-[4] mq450:text-lgi mq450:leading-[27px]">
                        تحليل البيانات
                      </h3>
                    </div>
                    <div className="self-stretch relative text-base leading-[28px] text-ui-text-secondary text-center z-[4]">
                      يقوم المساعد الذكي بتحليل بيانات السوق المصري بدقة
                      متناهية، مما يمكننا من تحديد الفرص والمخاطر، واتخاذ قرارات
                      استثمارية مستنيرة وغير متحيزة.
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[187px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[57px] pl-14 mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit z-[4] mq450:text-lgi mq450:leading-[27px]">
                        تجميع البيانات
                      </h3>
                    </div>
                    <div className="self-stretch relative text-base leading-[28px] text-ui-text-secondary text-center z-[4]">
                      يقوم المساعد الذكي بتجميع بيانات السوق المتجددة، مما يسمح
                      لنا بفهم شامل للسوق واتخاذ أفضل القرارات الاستثمارية
                      بالاعتماد على معطيات دقيقة ومحدثة.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent />
        <PageFooter />
      </div>
    </div>
  );
};

export default Frame;
