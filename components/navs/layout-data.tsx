"use client";

import { getDictionary } from "@/get-dictionary";
import LayoutPage from "./layout-page";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import apis from "@/lib/apis/blogs";
import { useEffect } from "react";
import { useStore } from "./store";

interface LayoutProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function LayoutData({ children, dictionary }: LayoutProps) {
  const setCategories = useStore((state) => state.setCategories);

  const getCategories = useMutation({
    mutationFn: apis.getCategories,
    onSuccess: (data: any) => {
      console.log("data cate", data);
      setCategories(data);
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });

  useEffect(() => {
    getCategories.mutateAsync({
      applicationFilter: "ndatrace",
    });
  }, []);

  return <LayoutPage dictionary={dictionary}>{children}</LayoutPage>;
}
