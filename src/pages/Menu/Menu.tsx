import React, { useEffect } from "react";
import {
  useGetCategoryQuery,
  useGetProductsByCategoryIdQuery,
} from "../../store/RTKQuery";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ProductItem from "../../components/ProductItem/ProductItem";
import { PrevBtn } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

const Menu: React.FC = () => {
  const { category_id } = useParams();

  const {
    isError,
    isLoading,
    data: categoryDataResponse,
  } = useGetCategoryQuery(Number.parseInt(category_id + ""));

  const navigate = useNavigate();

  const { data: dataProducts } = useGetProductsByCategoryIdQuery(
    Number.parseInt(category_id + "")
  );

  useEffect(() => {
    if (!category_id) {
      navigate("/");
    }
  }, [category_id]);

  return (
    <>
      <PrevBtn />
      {categoryDataResponse?.data ? (
        <div className="container">
          <h1 className="menu-title">{categoryDataResponse?.data?.name}</h1>
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
            <div className="products">
              {dataProducts?.data?.map((product, index) => (
                <ProductItem data={product} isLoading={isLoading} key={index} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="container" style={{ marginTop: "25px" }}>
          {Array(4)
            .fill(4)
            .map(() => (
              <LoaderComponent key={Math.random()} />
            ))}
        </div>
      )}
    </>
  );
};

export default Menu;
