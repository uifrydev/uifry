export const Bar = ({ animationDuration, progress }) => (
  <div
    className='bg-gradient h-[.3rem] w-full left-0 top-0 absolute z-[500000000]'
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  >s</div>
);
