import axios from "axios";
import IPost from "@/components/interfaces/post.interface";

export const postModule = {
  state: () => ({
    posts: [] as IPost[],
    selectedSort: "" as string,
    searchQuery: "" as string,
    page: 1 as number,
    limit: 10 as number,
    totalPages: 0 as number,
    sortOptions: [
      { value: "title", name: "Name", id: 1 },
      { value: "describe", name: "Describe", id: 2 },
    ],
  }),
  getters: {
    sortedPosts(state): IPost[] {
      return [...(state.posts as Array<IPost>)].sort((a: IPost, b: IPost) => {
        return a[state.selectedSort]?.localeCompare(b[state.selectedSort]);
      });
    },
    sortedAndSearchedPosts(state, getters): IPost[] {
      return getters.sortedPosts.filter((post: IPost) => {
        return post.title.toLowerCase().includes(state.searchQuery);
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setSelectedSort(state, sort) {
      state.selectedSort = sort;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, pages) {
      state.totalPages = pages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.page + 1);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", [...state.posts, ...res.data]);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
