import { autoComplete } from "@/lib/spoonacular";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AutoComplete = ({
  value,
  visible,
}: {
  value: string;
  visible: boolean;
}) => {
  const router = useRouter();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = setTimeout(() => {
      autoComplete(value).then((data) => {
        setData(data);
      });
    }, 800);

    return () => clearTimeout(getData);
  }, [value]);

  return (
    <div
      className={cn(
        `absolute w-80 z-9 mt-14 h-40 overflow-auto rounded-md flex flex-col p-5 gap-5 bg-white`,
        {
          hidden: !visible,
          visible: visible,
        }
      )}
    >
      {data &&
        data.map(
          (item: {
            id: React.Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
          }) => (
            <div
              key={item.id}
              className="w-fit cursor-pointer font-sofiaPro hover:underline"
              onClick={() => router.push(`/search?query=${item.title}`)}
            >
              {item.title}
            </div>
          )
        )}
    </div>
  );
};

export default AutoComplete;
