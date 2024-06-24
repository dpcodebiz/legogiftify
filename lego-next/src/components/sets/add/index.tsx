import { backend } from "@/utils/config";
import axios from "axios";
import AsyncSelect from "react-select/async";

type Props = {
  set_num: string;
};

type PartOption = {
  label: string;
  value: string;
};

export const SetAdd = ({ set_num }: Props) => {
  const promiseOptions = (inputValue: string) =>
    new Promise<PartOption[]>(async (resolve) => {
      const req = await axios.get(backend(`/parts/search?q=${inputValue}`));
      resolve(req.data);
    });

  return (
    <>
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    </>
  );
};
