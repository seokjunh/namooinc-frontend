"use client";

import { useForm } from "react-hook-form";
import ReadingGlasses from "../../public/svg/ReadingGlasses";
import { usePathname, useRouter } from "@/i18n/rounting";

export default function SearchNotice() {
  const router = useRouter();
  const pathName = usePathname();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit = (data: { searchTerm: string }) => {
    try {
      const query = data.searchTerm
        ? `?searchTerm=${encodeURIComponent(data.searchTerm)}`
        : "";

      router.push(`${pathName}${query}`);

      reset({ searchTerm: "" });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center border rounded-full py-2 px-6">
        <input
          {...register("searchTerm")}
          placeholder="검색어를 입력하세요."
          className="focus:outline-none w-[10rem] md:w-[20rem] lg:w-[30rem]"
        />
        <button type="submit">
          <ReadingGlasses />
        </button>
      </div>
    </form>
  );
}
