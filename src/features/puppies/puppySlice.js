import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => "players",
      transformResponse: (response) => response.data.players,
      transformErrorResponse: (response) => response.error,
      providesTags: ["Puppy"],
    }),
    getPuppy: build.query({
      query: (id) => "players/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
      providesTags["Puppy"],
    })
    addPuppy: build.mutation({
      
    })
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
