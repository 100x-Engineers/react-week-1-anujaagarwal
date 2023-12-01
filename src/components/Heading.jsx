import React from "react";

export default function Heading(props) {
  const { title } = props;
  return <p className="font-bold text-2xl ml-4">{title}</p>;
}
