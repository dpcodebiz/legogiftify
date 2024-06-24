import { backend } from "@/utils/config";
import axios from "axios";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";

import styles from "@styles/Form.module.scss";

type Props = {
  set_num: string;
};

type PartOption = {
  label: string;
  value: string;
};

type SetAddPartFormData = {
  part_num: string;
  quantity: number;
};

export const SetAdd = ({ set_num }: Props) => {
  const promiseOptions = (inputValue: string) => {
    if (!inputValue || inputValue.length < 3)
      return new Promise<PartOption[]>((resolve) => resolve([]));
    return new Promise<PartOption[]>(async (resolve) => {
      const req = await axios.get(backend(`/parts/search?q=${inputValue}`));
      resolve(req.data);
    });
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SetAddPartFormData>();

  // TODO input sanitation
  const onSubmit: SubmitHandler<SetAddPartFormData> = async (data) => {
    const req = await axios.post(backend("/sets/add"), {
      set_num: set_num,
      ...data,
    });
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <span className={styles.heading}>Add a new part</span>
        <Controller
          name="part_num"
          control={control}
          render={({ field: { onChange } }) => (
            <AsyncSelect
              onChange={(e) => onChange(e?.value)}
              cacheOptions
              defaultOptions
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
