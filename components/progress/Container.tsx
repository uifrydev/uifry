import { FC, ReactNode } from "react";


export const Container: FC<{ animationDuration: number, children: ReactNode, isFinished: boolean }> = ({ animationDuration, children, isFinished }) => (
  <div
    className='pointer-events-none'
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);
