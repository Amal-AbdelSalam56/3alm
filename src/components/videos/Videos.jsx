import { useEffect, useState } from "react";
import { SinglePost } from "..";
import { useSelector } from "react-redux";
import { getDataPostVideos } from "../posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos({ data }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { token, deletePost_id, update } = useSelector((state) => state.auth);

  const { items, hasMore, loadMore } = getDataPostVideos(
    1,
    token,
    deletePost_id,
    update,
    "post/get_post_video"
  );

  function handleFiltration() {
    const pipe = data.filter((post) => post.post_data.post_video !== "");
    setFilteredPosts(pipe);
  }

  useEffect(() => {
    handleFiltration();
  }, [data]);

  return (
    <div className="max-w-4xl m-auto grid gap-4">
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<div className="lds-default  m-auto d-flex"></div>}
      >
        <div className="videos__page">
          {items[0]?.id
            ? items.map((post) => <SinglePost key={post.id} data={post} />)
            : ""}
        </div>
      </InfiniteScroll>
      {/* {filteredPosts &&
        filteredPosts.map((post) => (
          <SinglePost key={post.post_id} data={post} />
        ))} */}
    </div>
  );
}
