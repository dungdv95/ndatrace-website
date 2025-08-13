"use client";
import { useIsMobile } from "@/components/hooks/use-mobile";
import ErrorNotice from "@/components/notice/notice-error";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDictionary } from "@/get-dictionary";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import apis from "@/lib/apis/blogs";
import { BlogProps, useStore } from "@/components/navs/store";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import moment from "moment";

export default function MainPage({
  blogListLang,
}: {
  blogListLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
}) {
  const listCategory = useStore((state) => state.listCategory);
  const [tab, setTab] = useState("all");
  const isMobile = useIsMobile();
  const pathName = usePathname();

  return (
    <div className="mt-[146px]">
      <Tabs value={tab} onValueChange={setTab} className="gap-9">
        <div className="bg-[#EFF8FF] py-[18px]">
          <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
            <TabsList className="h-6 bg-transparent p-0 gap-10">
              <TabsTrigger
                className="h-0 !bg-[#EFF8FF] !shadow-none text-[#535862] text-base leading-6 font-medium data-[state=active]:text-[#194185] data-[state=active]:font-bold "
                value="all"
              >
                {blogListLang.all}
              </TabsTrigger>
              {listCategory.map((category, index) => (
                <TabsTrigger
                  key={index}
                  className="h-0 !bg-[#EFF8FF] !shadow-none text-[#535862] text-base leading-6 font-medium data-[state=active]:text-[#194185] data-[state=active]:font-bold"
                  value={category.id}
                >
                  {getTitleCategory(category.id, pathName)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
          <TabsContent value="all">
            <BlogComponent tab={tab} />
          </TabsContent>
          {listCategory.map((item, index) => (
            <TabsContent key={index} value={item.id}>
              <BlogComponent tab={tab} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

function BlogComponent({ tab }: { tab: string }) {
  const {
    data: data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["/blogs/list-all", { tab }],
    queryFn: () =>
      apis.getBlogPost({
        pageIndex: 1,
        pageSize: 10,
        applicationFilter: "ndatrace",
        categoryIdFilter: tab !== "all" ? tab : "",
      }),
    retry: 0,
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <LoadDesktop />;
  }
  if (isError) {
    return <ErrorNotice error={error as Error} />;
  }

  if (data === undefined || data === null) {
    return null;
  }
  return <BlogView data={data} />;
}

function BlogView({ data }: { data: BlogProps[] }) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
      }}
      className="flex flex-col gap-[128px]"
    >
      <div className="flex justify-between gap-[29px] max-lg:gap-5">
        <div className="w-1/2 flex flex-col gap-2">
          <div
            className="cursor-pointer w-full h-[320px]"
            onClick={() => {
              router.push(`/blogs/${data[0]?.slug}`);
            }}
          >
            <img
              src={data[0]?.thumbnail}
              className="object-cover h-full w-full rounded-[16px]"
            />
          </div>

          <div>
            <div className="flex gap-2 items-center">
              {data[0]?.categoryIds.map((item, index: number) => (
                <Button
                  key={index}
                  className="mt-1 h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                >
                  {getTitleCategory(item, pathName)}
                </Button>
              ))}
            </div>
          </div>

          <span
            className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-lg:text-lg"
            onClick={() => {
              router.push(`/blogs/${data[0]?.slug}`);
            }}
          >
            {data[0]?.name}
          </span>

          <span className="text-[#194185] text-sm leading-5 ">
            {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
          </span>
          <span className="mt-2 text-[#194185] text-sm leading-5 ">
            {data[0]?.description}
          </span>
        </div>
        <div className="w-1/2 flex flex-col gap-[30px]">
          {data.slice(1, 4).map((item, index: number) => (
            <div
              key={index}
              className="flex gap-[30px] max-xl:gap-6 max-lg:gap-4"
            >
              <div
                className="cursor-pointer w-[191px] h-[147px] flex-shrink-0 max-lg:w-[169px] max-lg:h-[130px]"
                onClick={() => {
                  router.push(`/blogs/${item.slug}`);
                }}
              >
                <img
                  src={item.thumbnail}
                  className="object-cover h-full w-full  rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  {item.categoryIds.map((category, idxCategory: number) => (
                    <Button
                      key={`category_${idxCategory}`}
                      //   onClick={() => {
                      //     router.push(
                      //       `https://www.ndatrace.vn/vn/blogs/${item?.slug}`
                      //     );
                      //   }}
                      className="h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                    >
                      {/* {blogLang.news} */}
                      {getTitleCategory(category, pathName)}
                    </Button>
                  ))}
                </div>
                <span
                  className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-xl:text-lg max-lg:text-base"
                  onClick={() => {
                    router.push(`/blogs/${item.slug}`);
                  }}
                >
                  {item.name}
                </span>
                <span className="text-[#194185] text-sm leading-5 ">
                  {moment(item?.createdAt).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <span className="text-[#194185] text-2xl leading-8 font-semibold">
          Bài viết liên quan
        </span>
        <div className="grid grid-cols-4 gap-8">
          {data.slice(4).map((item, index) => (
            <div key={index} className="flex flex-col gap-[30px]">
              <div className="cursor-pointer w-full h-[220px] max-lg:h-[130px]">
                <img
                  src={item.thumbnail}
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  {item.categoryIds.map((category, idxCategory: number) => (
                    <Button
                      key={`category_${idxCategory}`}
                      className="h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                    >
                      {getTitleCategory(category, pathName)}
                    </Button>
                  ))}
                </div>
                <span
                  className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-xl:text-lg max-lg:text-base"
                  onClick={() => {
                    router.push(`/blogs/${item.slug}`);
                  }}
                >
                  {item.name}
                </span>
                <span className="text-[#194185] text-sm leading-5 ">
                  {moment(item?.createdAt).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const getTitleCategory = (categoryIds: string, pathName: string) => {
  let listCategory = useStore.getState().listCategory;
  if (pathName.includes("en")) {
    return listCategory.find((el) => el.id === categoryIds)?.translations.en
      .values.name;
  }
  return listCategory.find((el) => el.id === categoryIds)?.name;
};

function LoadDesktop() {
  return (
    <div className="flex flex-col gap-[128px]">
      <div className="flex gap-[29px]">
        <div className="w-1/2 flex flex-col gap-4">
          <Skeleton className="h-[319px] w-full" />
          <Skeleton className="h-6 w-[70px]" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-[90px]" />
          <Skeleton className="h-16 w-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-[30px]">
          <div className="flex gap-[30px] ">
            <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="h-6 w-[70px]" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
          </div>
          <div className="flex gap-[30px] ">
            <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="h-6 w-[70px]" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
          </div>
          <div className="flex gap-[30px] ">
            <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="h-6 w-[70px]" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Skeleton className="h-10 w-[250px]" />
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
