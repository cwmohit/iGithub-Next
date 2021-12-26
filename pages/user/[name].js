import React from "react";
import UserCard from "../../components/UserCard";

function User({ data = [] }) {
  return (
    <div className="row container m-auto users-container">
      {data &&
        data?.map((user) => (
          <div key={user?.id} className="col-md-4 col-12">
            <UserCard user={user}/>
          </div>  
        ))}
    </div>
  );
}

export default User;

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "cwmohit" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.github.com/search/users?q=${params.name}&per_page=${100}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data?.items },
    revalidate: 10,
  };
}
