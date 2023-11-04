import Skeleton from "react-loading-skeleton";

const UserPlachholder = ({ howMany }) => {
  const data = [
    {
      name: "John Doe",
    },
    {
      name: "Jane Smith",
    },
    {
      name: "Michael Johnson",
    },
    {
      name: "Emily Davis",
    },
    {
      name: "William Wilson",
    },
    {
      name: "Olivia Brown",
    },
    {
      name: "James Miller",
    },
    {
      name: "Sophia Anderson",
    },
    {
      name: "Benjamin Taylor",
    },
    {
      name: "Isabella Martinez",
    },
    {
      name: "Daniel Thomas",
    },
    {
      name: "Mia Garcia",
    },
    {
      name: "Joseph Lee",
    },
    {
      name: "Charlotte Hernandez",
    },
    {
      name: "David Clark",
    },
    {
      name: "Amelia Lewis",
    },
    {
      name: "Alexander Walker",
    },
    {
      name: "Evelyn Hall",
    },
    {
      name: "Matthew Young",
    },
    {
      name: "Harper Allen",
    },
    {
      name: "Andrew Green",
    },
    {
      name: "Abigail King",
    },
    {
      name: "Christopher Baker",
    },
    {
      name: "Elizabeth Adams",
    },
    {
      name: "Liam Turner",
    },
    {
      name: "Victoria Campbell",
    },
    {
      name: "Henry Hill",
    },
    {
      name: "Sofia Mitchell",
    },
    {
      name: "Josephine Carter",
    },
    {
      name: "Samuel Murphy",
    },
    {
      name: "Penelope Collins",
    },
    {
      name: "Daniel Ward",
    },
    {
      name: "Aria Foster",
    },
    {
      name: "William Russell",
    },
    {
      name: "Scarlett Kelly",
    },
    {
      name: "Sebastian Hayes",
    },
    {
      name: "Chloe Simmons",
    },
    {
      name: "Jack Powell",
    },
    {
      name: "Grace Price",
    },
    {
      name: "Lucas Bennett",
    },
    {
      name: "Aurora Reed",
    },
    {
      name: "Jackson Fisher",
    },
    {
      name: "Lily Ward",
    },
    {
      name: "Owen Turner",
    },
    {
      name: "Hannah Hayes",
    },
    {
      name: "Maxwell Foster",
    },
    {
      name: "Nora Russell",
    },
    {
      name: "Henry Powell",
    },
  ];
  console.log(data);
  return (
    <div>
      {data.map(d => (
        <div
          key={d.name}
          className="max-w-sm w-full h-full p-[20px] border rounded-md flex bg-blue-100"
        >
          <div className="mb-4 profile mr-16">
            <Skeleton
              style={{ borderRadius: "50%" }}
              className="h-12  max-w-[50px]"
            ></Skeleton>
          </div>
          <div className="flex-1">
            <Skeleton className="h-6" count={4}></Skeleton>
          </div>
        </div>
      ))}
    </div>
  );
  //   {
  //       <div
  //         key={i}
  //         className="max-w-sm w-full h-full p-[20px] border rounded-md flex bg-blue-100"
  //       >
  //         <div className="mb-4 profile mr-16">
  //           <Skeleton
  //             style={{ borderRadius: "50%" }}
  //             className="h-12  max-w-[50px]"
  //           ></Skeleton>
  //         </div>
  //         <div className="flex-1">
  //           <Skeleton className="h-6" count={4}></Skeleton>
  //         </div>
  //       </div>;
  //     });
};

export default UserPlachholder;
