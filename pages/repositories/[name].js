import React from "react";
import UserCard from "../../components/UserCard";
import { useRouter } from 'next/router'

function Repo({ data }) {
  const router = useRouter();
  let {page, name} = router?.query;
  return (
    <div className="row container m-auto users-container">
      {data?.items &&
        data?.items?.map((user) => (
          <div key={user.id} className="col-md-4 col-12">
            <UserCard user={user} />
          </div>
        ))}
       {/* {
         !data?.incomplete_results &&
         <div>
          <button
              onClick={() => router.push(`/repositories/${name}?page=${parseInt(page)+1}`)}
              target="_blank"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Go to next page
            </button> 
         </div>
       }  */}
    </div>
  );
}

export default Repo;

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "cwmohit" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.github.com/search/users?q=${
      params.name
    }&per_page=${100}&page=${params?.page}`
  );
  // console.log(res)
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data },
    revalidate: 10,
  };
}
