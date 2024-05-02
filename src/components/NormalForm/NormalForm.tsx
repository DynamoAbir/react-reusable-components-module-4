import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-500 w-full p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border border-blue-500 grid  grid-cols-1  gap-5 justify-items-center",
          {
            "md:grid-cols-2": double,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full max-w-md"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
            <option value="">three</option>
            <option value="">four</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-400 rounded-md focus:bg-purple-500"
            type="checkbox"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
