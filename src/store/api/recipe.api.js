import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
    }),
    updateRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "PUT",
      }),
    }),
    deleteRecipe: builder.mutation({
      query: (id) => ({
        body: id,
        url: "/",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipeApi;
