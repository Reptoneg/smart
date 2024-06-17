import { FunctionComponent, memo } from "react";

export type CapitalLabelType = {
  className?: string;
  prop?: string;
  prop1?: string;
  group1321314605?: string;
};

const CapitalLabel: FunctionComponent<CapitalLabelType> = memo(
  ({ className = "", prop, prop1, group1321314605 }) => {
    return (
      <div
        className={`flex flex-row items-end justify-start gap-[10px] text-right text-5xl text-ui-text-primary font-cairo mq450:flex-wrap ${className}`}
      >
        <div className="flex flex-col items-end justify-start shrink-0 [debug_commit:0448091]">
          <div className="h-11 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <h3 className="mb-[-1px] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:0448091] mq450:text-lgi">
              {prop}
            </h3>
          </div>
          <div className="relative text-xs text-ui-text-secondary inline-block min-w-[121px] shrink-0 [debug_commit:0448091]">
            {prop1}
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.3px]">
          <img
            className="w-[50.7px] h-[50.7px] relative shrink-0 [debug_commit:0448091]"
            alt=""
            src={group1321314605}
          />
        </div>
      </div>
    );
  }
);

export default CapitalLabel;
