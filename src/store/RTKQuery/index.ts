import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const storeAPI = createApi({
  reducerPath: "storeAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://forest.webclub.uz/api" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => `/products`,
    }),

    getAllCategories: builder.query<
      {
        status: boolean;
        message: string;
        data: ICategory[];
      },
      void
    >({
      query: () => `/categories`,
    }),

    getCategory: builder.query<{ data: ICategory }, number>({
      query: (category_id) => `/categories/${category_id}`,
    }),

    getProductsByCategoryId: builder.query<{ data: IProduct[] }, number>({
      query: (category_id) => `/products/?category_id=${category_id}`,
    }),

    // Post Feedback

    postFeedback: builder.mutation<any, Feedback>({
      query: ({ question1, question2, question3, question4 }) => ({
        url: `/feedback/?question_1=${question1.value}&question_2=${question2.value}&question_3=${question3.value}&question_4=${question4}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetCategoryQuery,
  useGetProductsByCategoryIdQuery,
  usePostFeedbackMutation,
} = storeAPI;
