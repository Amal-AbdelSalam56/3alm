import { useNavigate, useParams } from "react-router-dom";
import { SinglePost } from "../../components";
import { FiltersBar } from "../../components/ui";
import { filters } from "/public/filters";
import { useEffect, useState } from "react";
import { t } from "i18next";

export default function CategorizedPosts({ data }) {
  const buttons = ["articles", "news", "summaries"];
  const [Selected, setSelected] = useState("articles");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const name = useParams().name;
  function handleFiltration(button) {
    const pipe = data.filter(
      (post) => post.post_category?.toLowerCase() === button?.toLowerCase()
    );
    setFilteredPosts(pipe);
  }

  useEffect(() => {
    handleFiltration();
  }, [data]);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl m-auto grid gap-4">
      {/* <ul className="sticky sm:fixed top-4 z-30 max-w-3xl w-full sm:flex pt-8 text-center justify-between bg-white "> */}
      <ul className="flex text-center justify-evenly mb-4">
        {buttons.map((button, i) => (
          <li
            key={i}
            className={`pb-2 border-b-4 ${
              name === button ? "border-[#0099AB]" : "border-white"
            }`}
          >
            <button
              className="text-black capitalize font-black"
              onClick={() => {
                navigate(`/${button}`);
                // setSelected(button);
                handleFiltration(button);
              }}
            >
              {t(button)}
            </button>
          </li>
        ))}
      </ul>

      <FiltersBar filters={filters} width="" />

      {/* {data &&
        data.map((post) => <SinglePost key={post.post_id} data={post} />)} */}

      {filteredPosts &&
        filteredPosts.map((post) => (
          <SinglePost key={post.post_id} data={post} />
        ))}
    </div>
  );
}
