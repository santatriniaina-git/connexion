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
    <div className={classParent + " w-full"} ref={innerRef}>
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => {
          return (
            <>
              <Disclosure.Button
                as="div"
                className="flex justify-between items-center w-full bg-[#F9FAFB] border-0 rounded p-8 pr-14 text-left cursor-pointer"
              >
                <h6 className="flex items-center text-darkColor font-poppins font-bold text-[0.938rem] m-0">
                  {titleIcon}
                  <span className={spaceTitle ? classSpaceTitle : "ml-12"}>
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
                      ? "transition ease-in duration-[100ms] transform rotate-custom-90"
                      : "transition ease-in duration-[100ms] transform rotate-custom-0"
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
