import { FC, SVGProps } from "react";

const FooterDecoration = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
       <path
         fill="#3ABEAA"
         d="M300 200h100v100H300zM200 100h100v100H200zM0 300h100v100H0z"
       />
       <path fill="#FF9BFF" d="M200 300h100v100H200zM100 200h100v100H100z" />
       <circle cx={250} cy={250} r={50} fill="#fff" />
       <path fill="#fff" d="M100 300h100v100H100zM300 0h100v200H300z" />
    </svg>
  );
};

export default FooterDecoration;
