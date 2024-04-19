import React, { useEffect } from "react";
import {
  useGetCategoryQuery,
  useGetProductsByCategoryIdQuery,
} from "../../store/RTKQuery";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ProductItem from "../../components/ProductItem/ProductItem";
import { PrevBtn } from "../../components";
import { setProducts } from "../../store/storeSlice/storeSlice";

const Menu: React.FC = () => {
  const { category_id } = useAppSelector((state) => state.storeSlice);

  const {
    isError,
    isLoading,
    data: categoryDataResponse,
  } = useGetCategoryQuery(category_id);

  const { products: dataProducts } = useAppSelector(
    (state) => state.storeSlice
  );

  const dipatch = useAppDispatch();

  useEffect(() => {
    const { data } = useGetProductsByCategoryIdQuery(category_id);
    dipatch(setProducts(data?.data!));
  }, [category_id]);

  return (
    <>
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
              {dataProducts?.map((product, index) => (
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
      <PrevBtn />
    </>
  );
};

export default Menu;
