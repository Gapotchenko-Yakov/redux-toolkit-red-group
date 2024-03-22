import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    updateRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "PUT",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    deleteRecipe: builder.mutation({
      query: (id) => ({
        body: id,
        url: "/",
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipeApi;
