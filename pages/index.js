import UserCard from "../components/UserCard";
import { useRouter } from 'next/router'

export default function Home({ data }) {
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if(e.target[0].name=="user"){
      router.push(`/user/${e.target[0].value}`);
    }else if(e.target[0].name=="repo"){
      router.push(`/repositories/${e.target[0].value}?page=1`);
    }
  }

  return (
    <div className="h-100vh">
      <div className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">iGithub</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </nav>
            </div>
          </header>

          <main className="h-60vh justify-content-center mx-auto my-3 d-flex flex-column align-item-center">
            <h1>iGithub</h1>
            <p className="lead">
              iGithub will help you to find any git repo in global and also can
              find a github user.
            </p>
            <div className="row mt-3">
              <div className="col-md-6 col-12 mt-2">
              <form onSubmit={onSubmit} className="d-flex flex-column">
                <div className="mb-3">
                  <label className="form-label">
                    Search User
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="user"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                  Search
                </button>
              </form>
              </div>
              <div className="col-md-6 col-12 mt-2">
                <form onSubmit={onSubmit} className="d-flex flex-column">
                  <div className="mb-3">
                    <label className="form-label">
                      Search Repo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="repo"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </main>

          <div className="row overflow-auto">
            {data?.map((user) => (
              <div key={user?.id} className="col-md-4 col-12">
                <UserCard user={user} />
              </div>
            ))}
          </div>

          <footer className="text-white-50 mt-3">
            <p>
              iGithub 2022 | by{" "}
              <a
                href="https://github.com/cwmohit"
                target="_blank"
                className="text-white"
              >
                cwmohit
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
