import NotFoundPageCmp from "@/components/shared/action/notfound/NotFoundPageCmp";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="py-10 flex items-center justify-center h-[calc(100vh-414px)]">
      <NotFoundPageCmp link={`/`} title={`Go to Home`} />
    </div>
  );
};

export default PageNotFound;
