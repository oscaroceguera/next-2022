import React from "react";
import useSWR, { SWRConfiguration } from "swr";

export type Likes = {
  total?: number;
  user?: boolean;
};

const API_URL = `/api/likes`;

async function getPostLikes(slug: string): Promise<Likes> {
  const res = await fetch(`${API_URL}/${slug}`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

async function updatePostLikes(slug: string): Promise<Likes> {
  const res = await fetch(`${API_URL}/${slug}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("An error occurred while posting the data.");
  }
  return res.json();
}

async function deletePostLikes(slug: string): Promise<Likes> {
  const res = await fetch(`${API_URL}/${slug}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("An error occurred while posting the data.");
  }
  return res.json();
}

export const usePostLikes = (slug: string, config?: SWRConfiguration) => {
  const { data, error, mutate } = useSWR(
    [API_URL, slug],
    () => getPostLikes(slug),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  const [liked, setLiked] = React.useState(data?.user);

  const increment = () => {
    // do nothing if the user has already liked
    if (!data || data.user) {
      return;
    }

    mutate(
      {
        total: data.total + 1,
        user: true,
      },
      false
    );

    setLiked(true);
    updatePostLikes(slug);
  };

  const decrement = () => {
    if (!data || !data.user) {
      return;
    }
    mutate({ total: data.total - 1, user: false }, false);

    setLiked(false);
    deletePostLikes(slug);
  };

  return {
    user: data?.user,
    likes: data?.total,
    isLoading: !error && !data,
    isError: !!error,
    increment,
    decrement,
  };
};
