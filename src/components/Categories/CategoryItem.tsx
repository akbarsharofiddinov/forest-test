import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setCategoryId } from "../../store/storeSlice/storeSlice";

interface IProps {
  data: ICategory;
  isLoading: boolean;
}

const CategoryItem: React.FC<IProps> = ({ data, isLoading }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="category">
      <Link
        to={`/menu/?category_id=${data.translations[0].category_id}`}
        onClick={() => {
          dispatch(setCategoryId(data.translations[0].category_id));
        }}
      >
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
