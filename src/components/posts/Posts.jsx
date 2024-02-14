import { useSelector } from "react-redux";
import { CreatePost, SinglePost } from "../";
import { getDataPost } from "./getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Posts({ data }) {
  const { token, deletePost_id, update } = useSelector((state) => state.auth);

  const { items, hasMore, loadMore } = getDataPost(
    1,
    token,
    deletePost_id,
    update,
    "post/post"
  );
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className="lds-default  m-auto d-flex"></div>}
    >
      <div className="flex items-center flex-col gap-4">
        <CreatePost />
        {items[0]?.id
          ? items.map((post) => <SinglePost key={post.id} data={post} />)
          : ""}
      </div>
    </InfiniteScroll>
    // <div className="flex items-center flex-col gap-4">
    //   <CreatePost />
    //   {data
    //     ? data.map((post) => <SinglePost key={post.post_id} data={post} />)
    //     : ""}
    // </div>
  );
}
