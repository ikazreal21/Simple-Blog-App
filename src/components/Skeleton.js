import React from "react";

function Skeleton(Components) {
  return function SkeletonComponent({ isLoading, ...props }) {
    if (!isLoading) return <Components {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        We are waiting for the data to load!...
      </p>
    );
  };
}

export default Skeleton;
