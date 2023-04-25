/*
 * This Disclosure is a component used
 * as a big white collpase with the big arrow on the right
 */
import React from "react";
import { Disclosure } from "@headlessui/react";
import bigArrow from "../../assets/BigArrow.svg";
import bigArrowDown from "../../assets/BigArrowDown.svg";
// import { DisclosureContentFluid } from "@components/TransitionFluid";

const BigDisclosure = ({
  elementTitle,
  childrenTitle,
  title,
  titleIcon,
  children,
  defaultOpen,
  spaceTitle,
  classSpaceTitle,
  classParent = "",
  innerRef,
  withArrowDown
}) => {
  return (
    <div className={classParent + " arh-w-full"} ref={innerRef}>
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button
                as="div"
                className="arh-flex arh-justify-between arh-items-center arh-w-full arh-bg-white arh-border-0 arh-rounded arh-p-8 arh-pr-14 arh-text-left arh-cursor-pointer"
              >
                <h6 className="arh-flex arh-items-center arh-text-darkColor arh-font-poppins arh-font-bold arh-text-[0.938rem] arh-m-0">
                  {titleIcon}
                  <span className={spaceTitle ? classSpaceTitle : "arh-ml-12"}>
                    {title}
                  </span>
                  {elementTitle ? childrenTitle : ""}
                </h6>
                {withArrowDown ? (
                  <div>
                {open ? (
                  <img
                    src={bigArrowDown}
                    alt="Arrow icon"
                  />
                ) : (
                  <img
                    src={bigArrow}
                    alt="Arrow icon"
                  />
                )}
                </div>
                ) : (
                <img
                  src={bigArrow}
                  alt="Arrow icon"
                  className={`${
                    open
                      ? "arh-transition arh-ease-in arh-duration-[100ms] arh-transform arh-rotate-custom-90"
                      : "arh-transition arh-ease-in arh-duration-[100ms] arh-transform arh-rotate-custom-0"
                  }`}
                />
                )}
              </Disclosure.Button>
              {/* <DisclosureContentFluid open={open}> */}
                <Disclosure.Panel unmount={false}>{children}</Disclosure.Panel>
              {/* </DisclosureContentFluid> */}
            </>
          );
        }}
      </Disclosure>
    </div>
  );
};

export default BigDisclosure;
