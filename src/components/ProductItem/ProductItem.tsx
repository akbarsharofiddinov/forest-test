import React from "react";

interface IProps {
  data: IProduct;
  isLoading: boolean;
}

const ProductItem: React.FC<IProps> = ({ data, isLoading }: IProps) => {
  const formatPrice = Intl.NumberFormat("en-US");

  return (
    <>
      <div className="product">
        <img src={data.img_url} alt="product-image" />
        <div className="product-body">
          {isLoading ? (
            ""
          ) : (
            <>
              <div className="left-side">
                <h1 className="name">{data.translations[0].name}</h1>
                <p className="desc">{data.translations[0].description}</p>
              </div>
              <div className="right-side">
                <span className="price">
                  {formatPrice.format(data.price).replace(",", " ")} сум
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
