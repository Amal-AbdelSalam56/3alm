import { useState, useEffect } from "react";
//get posts
export const getDataPost = (initialPage, token, deletePost_id, update, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      console.log(data.data);
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data.data]);
      } else {
        setItems([...data.data]);
      }

      if (data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  const updatePost = (postId, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (update) => {
    const existingPostIndex = items.findIndex((post) => post.id === update.id);

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(update.id, update);
    } else {
      // console.log("update", update);
      // Post not found, add it to the beginning of the array
      setItems((prevItems) => [update, ...prevItems]);
    }
  };

  useEffect(() => {
    // console.log("first");
    addOrUpdatePost(update);
  }, [update]);

  useEffect(() => {
    const deletePost_idHandle = (deletePost_id) => {
      setItems((prevItems) =>
        prevItems.filter((post) => post.id !== deletePost_id.post_id)
      );
    };
    deletePost_idHandle(deletePost_id);
  }, [deletePost_id]);
  return { items, hasMore, loadMore };
};

//who like posts
//get posts
export const getDataWhoLikePost = (initialPage, token, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      console.log(data?.original?.data?.data);

      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data?.original?.data?.data]);
      } else {
        setItems([...data?.original?.data?.data]);
      }

      if (data?.original?.data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  return { items, hasMore, loadMore };
};
//get posts
export const getDataWhoLikeComment = (initialPage, token, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      console.log(data?.original?.data?.data);

      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data?.original?.data?.data]);
      } else {
        setItems([...data?.original?.data?.data]);
      }

      if (data?.original?.data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  return { items, hasMore, loadMore };
};

//get posts
export const getDataPostServicess = (
  initialPage,
  token,
  deletePost_id,
  update,
  api
) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data.data]);
      } else {
        setItems([...data.data]);
      }

      if (data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  const updatePost = (postId, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (update) => {
    const existingPostIndex = items.findIndex((post) => post.id === update.id);

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(update.id, update);
    } else {
      // console.log("update", update);
      // Post not found, add it to the beginning of the array
      setItems((prevItems) => [update, ...prevItems]);
    }
  };

  useEffect(() => {
    // console.log("first");
    addOrUpdatePost(update);
  }, [update]);

  useEffect(() => {
    const deletePost_idHandle = (deletePost_id) => {
      setItems((prevItems) =>
        prevItems.filter((post) => post.id !== deletePost_id.post_id)
      );
    };
    deletePost_idHandle(deletePost_id);
  }, [deletePost_id]);
  return { items, hasMore, loadMore };
};

//get posts
export const getDataNotification = (initialPage, token, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data.data.data]);
      } else {
        setItems([...data.data.data]);
        setPage(2);
      }

      if (data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  return { items, hasMore, loadMore, setPage };
};

//get posts
export const getDataPostProfile = (initialPage, token, api, params, user) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      console.log(data.data, "belal");
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data.data]);
      } else {
        setItems([...data.data]);
      }

      if (data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token, params]);
  useEffect(() => {
    setItems([]);
    setHasMore(true);
    setPage(1);
  }, [user]);

  return { items, hasMore, loadMore };
};

//get profile

export const getDataProfile = (token, api, change, params) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // if (data.status === 429) {
      //   // Implement backoff logic here
      //   console.log("Too Many Requests. Retrying after some time...");
      //   await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
      //   fetchData();
      //   return;
      // }
      // console.log(data);
      console.log(data);
      setItems(data.data);
      // if (page > 0) {
      //   setItems((prevItems) => [...prevItems, ...data?.data]);
      // } else {
      //   setItems([...data?.data]);
      // }

      // if (data?.data?.length === 0) {
      //   setHasMore(false);
      // }
    };
    fetchData();
  }, [change, params]);

  return { items };
};

//get product news
export const getDataNews = (
  initialPage,
  token,
  deletePost_id,
  updateNews,
  api,
  filteringBy
) => {
  console.log(filteringBy);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };
  let API_URL;
  useEffect(() => {
    if (filteringBy) {
      API_URL = `${URL}/api/${api}?category_id=${filteringBy}&page=${page}`;
    } else {
      API_URL = `${URL}/api/${api}?page=${page}`;
    }
    console.log(API_URL);
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/api/${api}?category_id=${filteringBy}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      // console.log(data);
      console.log(data, "das");
      if (page > 0) {
        // setItems((prevItems) => [...prevItems, ...data?.data.data]);
        setItems((prevItems) => {
          // Extract unique identifiers from the current items
          const uniqueIds = new Set(prevItems.map((item) => item.id));

          // Filter out new items that have already been added
          const filteredNewItems = data?.data?.filter(
            (item) => !uniqueIds.has(item.id)
          );

          // Concatenate the previous items with the filtered new items
          return [...prevItems, ...filteredNewItems];
        });
      } else {
        setItems([...data?.data]);
      }

      if (data?.data?.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token, filteringBy]);
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setItems([]);
  }, [filteringBy]);

  const updatePost = (postId, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (updateNews) => {
    const existingPostIndex = items.findIndex(
      (post) => post.id === updateNews.id
    );

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(updateNews.id, updateNews);
    } else {
      // Post not found, add it to the beginning of the array
      setItems((prevItems) => [updateNews, ...prevItems]);
    }
  };

  useEffect(() => {
    if (updateNews?.id) {
      // console.log("first");
      addOrUpdatePost(updateNews);
    }
  }, [updateNews]);

  // useEffect(() => {
  //   // console.log(deletePost_id, "ASd");
  //   const deletePost_idHandle = (deletePost_id) => {
  //     setItems((prevItems) =>
  //       prevItems.filter((post) => post.id !== deletePost_id.post_id)
  //     );
  //   };
  //   // console.log(items);
  //   deletePost_idHandle(deletePost_id);
  // }, [deletePost_id]);
  return { items, hasMore, loadMore };
};

//videos
export const getDataPostVideos = (
  initialPage,
  token,
  deletePost_id,
  update,
  api
) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data?.posts_type_video.data]);
      } else {
        setItems([...data?.posts_type_video.data]);
      }

      if (data?.posts_type_video.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  // const updatePost = (postId, updatedData) => {
  //   setItems((prevItems) =>
  //     prevItems.map((post) =>
  //       post.id === postId ? { ...post, ...updatedData } : post
  //     )
  //   );
  // };

  // const addOrUpdatePost = (update) => {
  //   const existingPostIndex = items.findIndex((post) => post.id === update.id);

  //   if (existingPostIndex !== -1) {
  //     // Post found, update it
  //     updatePost(update.id, update);
  //   } else {
  //     // Post not found, add it to the beginning of the array
  //     setItems((prevItems) => [update, ...prevItems]);
  //   }
  // };

  // useEffect(() => {
  //   addOrUpdatePost(update);
  // }, [update]);

  // useEffect(() => {
  //   // console.log(deletePost_id, "ASd");
  //   const deletePost_idHandle = (deletePost_id) => {
  //     setItems((prevItems) =>
  //       prevItems.filter((post) => post.id !== deletePost_id.post_id)
  //     );
  //   };
  //   // console.log(items);
  //   deletePost_idHandle(deletePost_id);
  // }, [deletePost_id]);
  return { items, hasMore, loadMore };
};

//reels

export const getDataPostReels = (
  initialPage,
  token,
  deletePost_id,
  update,
  api
) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data?.data]);
      } else {
        setItems([...data?.data]);
      }

      if (data?.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  const updatePost = (postId, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (update) => {
    const existingPostIndex = items.findIndex((post) => post.id === update.id);

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(update.id, update);
    } else {
      // Post not found, add it to the beginning of the array
      setItems((prevItems) => [update, ...prevItems]);
    }
  };

  useEffect(() => {
    addOrUpdatePost(update);
  }, [update]);

  useEffect(() => {
    // console.log(deletePost_id, "ASd");
    const deletePost_idHandle = (deletePost_id) => {
      setItems((prevItems) =>
        prevItems.filter((post) => post.id !== deletePost_id.post_id)
      );
    };
    // console.log(items);
    deletePost_idHandle(deletePost_id);
  }, [deletePost_id]);
  return { items, hasMore, loadMore };
};

//comment
export const getDataComment = (
  initialPage,
  token,
  deleteComment_id,
  update,
  api,
  postData
) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        setItems((prevItems) => [...prevItems, ...data.original.comment.data]);
      } else {
        setItems([...data.original.comment.data]);
      }

      if (data.original.comment.data.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  const updatePost = (postId, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (update) => {
    const existingPostIndex = items.findIndex((post) => post.id === update.id);

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(update.id, update);
    } else {
      // Post not found, add it to the beginning of the array
      setItems((prevItems) => [update, ...prevItems]);
    }
  };

  useEffect(() => {
    addOrUpdatePost(update);
  }, [update]);

  useEffect(() => {
    // console.log(deleteComment_id, "ASd");
    const deleteComment_idHandle = (deleteComment_id) => {
      setItems((prevItems) =>
        prevItems.filter((post) => post.id !== deleteComment_id.post_id)
      );
    };

    // console.log(items);
    deleteComment_idHandle(deleteComment_id);
  }, [deleteComment_id]);
  return { items, hasMore, loadMore };
};

//firends page

export const getDataFriends = (initialPage, token, api, params) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);
  let api_url;
  if (params) {
    api_url = `${URL}/api/${api}?page=${page}&user_name=${params}`;
  } else {
    api_url = `${URL}/api/${api}?page=${page}`;
  }
  const loadMore = () => {
    setPage(page + 1);
  };

  console.log(api_url);

  useEffect(() => {
    // console.log(`${URL}/api/${api}?page=${page}`);
    const fetchData = async () => {
      const response = await fetch(`${api_url}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      console.log(data);
      if (page > 0) {
        // console.log(data?.data.data);
        setItems((prevItems) => [...prevItems, ...data?.data]);
      } else {
        setItems([...data?.data]);
      }

      // if (data?.data?.length === 0) {
      //   setHasMore(false);
      // }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);
  useEffect(() => {
    setPage(1);
  }, [params]);

  return { items, hasMore, loadMore };
};
//firends page

export const getDataFollowers = (initialPage, token, api, params) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);
  let api_url;
  if (params) {
    api_url = `${URL}/api/${api}?page=${page}&user_name=${params}`;
  } else {
    api_url = `${URL}/api/${api}?page=${page}`;
  }
  const loadMore = () => {
    setPage(page + 1);
  };

  console.log(api_url);
  useEffect(() => {
    // console.log(`${URL}/api/${api}?page=${page}`);
    const fetchData = async () => {
      const response = await fetch(`${api_url}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        // console.log(data?.data.data);
        setItems((prevItems) => [...prevItems, ...data?.data]);
      } else {
        setItems([...data?.data]);
      }

      // if (data?.data?.length === 0) {
      //   setHasMore(false);
      // }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);
  useEffect(() => {
    setPage(1);
  }, [params]);

  return { items, hasMore, loadMore };
};

//Requests
export const getDataRequests = (initialPage, token, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        // console.log(data);
        // setItems((prevItems) => [...prevItems, ...data?.data]);
      } else {
        // setItems([...data?.data]);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  return { items, hasMore, loadMore };
};
//suggest
export const getDataSuggest = (initialPage, token, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        // console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData();
        return;
      }
      // console.log(data);
      if (page > 0) {
        console.log(data);
        setItems((prevItems) => [...prevItems, ...data?.data]);
      } else {
        setItems([...data?.data]);
      }

      if (data?.data?.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  return { items, hasMore, loadMore };
};

// get search ;

export const getDataSearch = (initialPage, token, api, text, filteringBy) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  const fetchData = async () => {
    console.log(
      `${URL}/api/search-general?type=${filteringBy}&query=${text}&page=${page}`
    );
    if (text) {
      const response = await fetch(
        `${URL}/api/${api}?type=${filteringBy}&query=${text}&page=${page}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ query: text }),
        },
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ query: text }),
        }
      );

      const data = await response.json();

      console.log(data);
      if (page > 1) {
        setItems((prevItems) => [...prevItems, ...data.data]);
      } else {
        setItems([...data.data]);
      }

      if (data?.data.length === 0) {
        setHasMore(false);
      }
    }
  };
  useEffect(() => {
    setHasMore(true);
    setPage(1);
    // if (hasMore) {
    //   fetchData();
    // }
  }, [filteringBy]);
  useEffect(() => {
    fetchData();
    // if (hasMore) {
    //   fetchData();
    // }
  }, [page, token, text, filteringBy]);

  // useEffect(() => {get}, [text]);

  return { items, hasMore, loadMore, setPage, setItems };
};
