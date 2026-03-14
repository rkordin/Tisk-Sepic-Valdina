import React from "react";
import { BlogSidebar } from "../components/blogs/BlogSidebar";

export const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="td-postbox-area pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 mb-40">{children}</div>

            {/* sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </div>
    </>
  );
};
