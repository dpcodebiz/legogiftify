import { backend } from "@/utils/config";
import axios from "axios";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";

import { stalePartsAtom } from "@/utils/atoms";
import styles from "@styles/Form.module.scss";
import { useSetAtom } from "jotai";
import { uid } from "radash";
import { components } from "react-select";

type Props = {
  set_num: string;
};

type PartOption = {
  label: string;
  value: string;
};

type SetAddPartFormData = {
  id: number;
  quantity: number;
};

const Option = (props: any) => (
  <components.Option {...props} className="country-option">
    <div className="flex flex-row gap-4">
      <img className="w-12" src={props.data.img_url} alt="logo" />
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

export const SetAdd = ({ set_num }: Props) => {
  const promiseOptions = (inputValue: string) => {
    if (!inputValue || inputValue.length < 3)
      return new Promise<PartOption[]>((resolve) => resolve([]));
    return new Promise<PartOption[]>(async (resolve) => {
      const req = await axios.get(backend(`/parts/search?q=${inputValue}`));
      resolve(req.data);
    });
  };

  const setStaleParts = useSetAtom(stalePartsAtom);

  const {
    register,
    handleSubmit,
    control,
    reset: resetForm,
    formState: { errors },
  } = useForm<SetAddPartFormData>();

  //@ts-expect-error
  const SingleValue = ({ children, ...props }) => (
    //@ts-expect-error
    <components.SingleValue {...props}>
      <div className="flex flex-row gap-4">
        <img className="w-12" src={props.data.img_url} />
        <span className="my-auto">{children}</span>
      </div>
    </components.SingleValue>
  );

  // TODO input sanitation
  const onSubmit: SubmitHandler<SetAddPartFormData> = async (data) => {
    await axios.post(backend("/sets/add"), {
      set_num: set_num,
      ...data,
    });

    setStaleParts(uid(10));
    resetForm();
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <span className={styles.heading}>Add a new part</span>
        <Controller
          name="id"
          control={control}
          render={({ field: { onChange } }) => (
            <AsyncSelect
              onChange={(e) => onChange(e?.value)}
              cacheOptions
              defaultOptions
              components={{
                Option,
                SingleValue,
              }}
              loadOptions={promiseOptions}
            />
          )}
        />
        <div className={styles.inline}>
          <input
            {...register("quantity")}
            type="text"
            className={styles.input}
            placeholder="Quantity"
          />
          <input className={styles.button} type="submit" value="ADD" />
        </div>
      </form>
    </>
  );
};
