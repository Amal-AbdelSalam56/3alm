import { chrome, location } from ".";
import { Select } from "../../ui";

export default function PrivacySettings() {
  const tableData = [
    {
      device: "samsung A31",
      app: {
        img: chrome,
        name: "chrome",
      },
      date: "19/10/2022",
      location: {
        img: location,
        name: "41.46.43.234",
      },
    },
  ];

  return (
    <form className="grid gap-4">
      <Select
        preSelect
        className="w-full capitalize rounded-md"
        selectName="account privacy"
        selectLabels={["privet", "public"]}
      />
      <Select
        preSelect
        className="w-full capitalize rounded-md"
        selectName="who can see my posts"
        selectLabels={["anyone", "friends", "onlyMe"]}
      />
      <Select
        preSelect
        className="w-full capitalize rounded-md"
        selectName="who can share my posts"
        selectLabels={["anyone", "friends", "onlyMe"]}
      />

      <p className="capitalize">{"user session"}</p>
      <div className="bg-[#F2F2F2] p-4 rounded-md">
        {tableData.map((data, i) => (
          <ul key={i} className="flex justify-between items-center">
            <li>{data.device}</li>
            <li className="flex justify-center items-center gap-4">
              <img className="w-5" src={data.app.img} alt="" />
              <p>{data.app.name}</p>
            </li>
            <li>{data.date}</li>
            <li className="flex justify-center items-center gap-4">
              <img className="w-5" src={data.location.img} alt="" />
              <p>{data.location.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </form>
  );
}
