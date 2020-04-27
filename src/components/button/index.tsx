import React from 'react';

interface Props {
  /**
   * This is backgroundColor
   */
  backgroundColor: string;
  /**
   * This is text color button
   */
  color: string;
}

const style: React.CSSProperties = {
  backgroundColor: "#4992ff",
  color: "#BFC6C7"
};

export const Button: React.FC<Props> = ({children, backgroundColor, color}) => {
  return <button style = {style}>Find Fest</button>
};