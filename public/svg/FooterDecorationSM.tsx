import { SVGProps } from "react";

const FooterDecorationSM = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 192 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#3ABEAA" d="M128 59.667h64v59.667h-64z" />
      <path fill="#fff" d="M128 0h64v59.667h-64z" />
      <path fill="#FF9BFF" d="M64 119.333h64V179H64z" />
      <ellipse cx={96} cy={89.5} rx={32} ry={29.833} fill="#fff" />
      <ellipse cx={32} cy={147.833} rx={32} ry={29.833} fill="#3ABEAA" />
    </svg>
  );
};

export default FooterDecorationSM;
