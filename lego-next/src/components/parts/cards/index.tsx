import { Part } from "@models/part";

type Props = {
  part: Part;
};

export const PartCard = ({ part }: Props) => {
  return (
    <>
      <div>{part.name}</div>
      <div>{}</div>
    </>
  );
};
