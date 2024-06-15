import { Skeleton } from "../ui/skeleton";

export default function CountryPageSkeleton() {
  return (
    <section className="p-5 md:p-16">
      <Skeleton className="w-[200px] h-[50px]" />
      <div className="mt-5">
        <Skeleton className="w-[100px] h-[60px]" />
        <div className="flex items-center gap-3 mt-2">
          <Skeleton className="w-[46px] h-[30px]" />
          <Skeleton className="w-[46px] h-[30px]" />
          <Skeleton className="w-[46px] h-[30px]" />
        </div>
        <div className="block md:flex items-center gap-4 mt-3">
          <Skeleton className="w-full md:w-[45%] h-[100px] rounded-md" />
          <Skeleton className="w-full md:w-[45%] h-[100px] rounded-md mt-5 md:mt-0" />
        </div>
        <div className="block md:flex items-center gap-4">
          <Skeleton className="w-full md:w-[45%] h-[100px] rounded-md" />
          <Skeleton className="w-full md:w-[45%] h-[100px] rounded-md mt-5 md:mt-0" />
        </div>
      </div>
    </section>
  );
}
