import { FilterParams } from "@/Interface/interface";
import { list } from "./links";
import { loadMore } from "./consts";

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
  { subCategory, figma, xd, sketch }: FilterParams,
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
  setLoadMore,
}: {
  isLoading: Boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
  setCards: React.Dispatch<React.SetStateAction<any[]>>;
  sanity: any;
  query: string;
  setLoadMore: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (isLoading) return;
  setLoading(true);
  const res = await sanity.fetch(query);
  setLoadMore(res.length == loadMore);
  setProductIndex((prev) => prev + loadMore);
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

export const removeEmptyPTagsFromClass = () => {
  let temp = document.querySelector(".body");
  temp?.setAttribute("id", "body");
  let mainDiv = document.getElementById("body");
  if (!mainDiv) return;
  // Remove all <br> tags
  mainDiv.querySelectorAll("br").forEach((br) => br.remove());
  const emptyPTags = Array.from(mainDiv.querySelectorAll("p")).filter(
    (p) => !p.textContent?.trim()
  );

  emptyPTags.forEach((p) => {
    p.style.display = "none";
  });
};
// export const wrapper = (): void => {
//   const mainDiv: HTMLElement | null = document.querySelector(".main");
//   let currentWrapper: HTMLDivElement | null;

//   function wrapElements(element: HTMLElement): void {
//     for (let child of element.children) {
//       if (child.tagName === "H2") {
//         currentWrapper = document.createElement("div");
//         currentWrapper.classList.add("wrapper");
//         element.insertBefore(currentWrapper, child);
//       }

//       if (currentWrapper) {
//         currentWrapper.appendChild(child);
//       }

//       wrapElements(child as HTMLElement);
//     }
//   }
//   if (mainDiv) {
//     wrapElements(mainDiv);
//   }
// };
export const wrapper = (): void => {
  const mainDiv: HTMLElement | null = document.querySelector(".main");
  let currentWrapper: HTMLDivElement | null;

  function wrapElements(element: HTMLElement): void {
    for (let child of Array.from(element.children)) {
      if (child.tagName === "H2") {
        currentWrapper = document.createElement("div");
        currentWrapper.classList.add("wrapper");
        element.insertBefore(currentWrapper, child);
      }

      if (currentWrapper) {
        currentWrapper.appendChild(child);
      }

      wrapElements(child as HTMLElement);
    }
  }
  if (mainDiv) {
    wrapElements(mainDiv);
  }
};
export const toLink = (str: string): string =>
  str.toLowerCase().split(" ").join("-");
export const isTokenPresent = (): boolean => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return !!token;
  }
  return false;
};

export function generateQuery(type: string, fields: string, limit: number) {
  return `*[_type=='${type}'][0...${limit - 1}]{
    ${fields}
    ,"total": count(*[_type == "${type}"])
  }`;
}

export const validateDetails = (details: {
  name: string;
  email: string;
  link: string;
  comments: string;
}) => {
  const errors: {
    name?: string;
    email?: string;
    link?: string;
    comments?: string;
  } = {};

  if (!details.name.trim()) {
    errors.name = "Name cannot be empty!";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(details.email)) {
    errors.email = "Email is not valid!";
  }

  if (details.comments.length < 5) {
    errors.comments = "Comments must be at least 5 characters!";
  }

  const figmaLinkRegex =
    /^(?:https:\/\/)?(?:www\.)?(?:figma\.com\/.+|drive\.google\.com\/.+)/;
  if (!figmaLinkRegex.test(details.link)) {
    errors.link = "Link must be a valid Figma or Google Drive link!";
  }

  return errors;
};
