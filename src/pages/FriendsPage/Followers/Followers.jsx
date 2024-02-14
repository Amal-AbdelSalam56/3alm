import { useSelector } from "react-redux";
import Cartfriend from "../components/cartfriend";
import { getDataFollowers, getDataFriends } from "../../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";

function Followers() {
 const { token } = useSelector((state) => state.auth);
 const { items, hasMore, loadMore } = getDataFollowers(
   1,
   token,
   "current-follower"
 );
  console.log(items);
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className="lds-default m-auto d-flex"></div>}
    >
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {items.length > 0
          ? items.map((post, i) => (
              <Cartfriend
                key={i}
                user={post}
                name={"Rod ghone"}
                job={"Digital / Design Consultant"}
                details={
                  "Aliqua id fugiat nostrud irure ex duis ea quis id quisad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                }
                button="View Profile"
              />
            ))
          : ""}
      </div>
    </InfiniteScroll>
  );
}

export default Followers;
