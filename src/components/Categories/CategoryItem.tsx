import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  data: ICategory;
  isLoading: boolean;
}

const CategoryItem: React.FC<IProps> = ({ data, isLoading }: IProps) => {
  return (
    <div className="category">
      <Link to={`/menu/${data.translations[0].category_id}`}>
        <img src={data.img_url} alt="category-image" />
        <div className="category-body">
          {isLoading ? (
            ""
          ) : (
            <>
              <h1 className="name">{data.translations[0].name}</h1>
              <p className="desc">{data.translations[0].description}</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
