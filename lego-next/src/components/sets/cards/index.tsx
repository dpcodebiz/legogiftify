import { Set } from "@models/set";
import Link from "next/link";

type Props = {
  set: Set;
};

export const SetCard = ({ set }: Props) => {
  return (
    <div className="bg-blue-200">
      <div className="relative bg-white p-4">
        <Link href={`set/${set.set_num}`}>
          <img
            className="rounded-lg max-h-[250px] mx-auto"
            src={set.img_url}
            alt=""
          />
        </Link>
      </div>
      <div>{set.name}</div>
      <div></div>
      <div></div>
    </div>
  );
};
