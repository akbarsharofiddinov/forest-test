import React from "react";
import { useGetAllCategoriesQuery } from "../../store/RTKQuery";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import CategoryItem from "./CategoryItem";

const Categories: React.FC = () => {
  const { isError, isLoading, data } = useGetAllCategoriesQuery();

  return (
    <>
      {isLoading ? (
        <div style={{ marginTop: "25px" }}>
          {Array(4)
            .fill(4)
            .map(() => (
              <LoaderComponent key={Math.random()} />
            ))}
        </div>
      ) : isError ? (
        <div>error</div>
      ) : (
        <div className="categories">
          {data?.data.map((item, index) => (
            <CategoryItem data={item} isLoading={isLoading} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Categories;
