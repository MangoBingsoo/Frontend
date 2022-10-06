interface homeIndicatorColor {
  color: string;
}

export const HomeIndicatorImg = ({ color }: homeIndicatorColor) => {
  return (
    <svg
      width="148"
      height="4"
      viewBox="0 0 148 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="2"
        x2="146"
        y2="2"
        stroke={`${color}`}
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  );
};
