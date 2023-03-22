import { FilterParams } from "@/Interface/interface";
import { list } from "./links";

export const slugToCapitalize = (str = ""): String =>
  str
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
export const titleWithSlug = (slug: string) => {
  return list[0].list.find((item) => {
    return item.link.includes(slug);
  })?.title;
};

export const applyFilter = (
  {
    subCategory,
    figma,
    xd,
    sketch,
  }: FilterParams,
  setter: React.Dispatch<React.SetStateAction<any[]>>,
  initialData: any[]
) => {
  let temp = initialData;

  if (figma) {
    temp = temp.filter((item) => item.sanityFilter.Figma == true);
  }
  if (xd) {
    temp = temp.filter((item) => item.sanityFilter.XD == true);
  }
  if (sketch) {
    temp = temp.filter((item) => item.sanityFilter.Sketch == true);
  }
  if (subCategory.includes("All")) {
    setter(temp);
    return;
  }
  temp = temp.filter((item) => {
    return item.subCategory?.toLowerCase() == subCategory?.toLowerCase();
  });
  setter(temp);
};

export const fetchData = async ({
  isLoading,
  setLoading,
  setProductIndex,
  setCards,
  sanity,
  query,
}: {
  isLoading: Boolean;
  setLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
  setCards: React.Dispatch<React.SetStateAction<any[]>>;
  sanity: any;
  query: string;
}) => {
  if (isLoading) return;
  setLoading(true);
  setProductIndex((prev) => prev + 18);
  const res = await sanity.fetch(query);
  // if(!res.length && setEndProducts){
  //   setEndProducts(true)
  // }
  setCards((prev) => [...prev, ...res]);
  setLoading(false);
  return res;
};

export const fetchDataServer = async ({
  sanity,
  query,
}: {
  sanity: any;
  query: string;
}) => {
  const res = await sanity.fetch(query);
  return res;
};
