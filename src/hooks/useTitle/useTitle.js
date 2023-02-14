import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Job Portal- ${title}`;
  }, [title]);
};

export default useTitle;
