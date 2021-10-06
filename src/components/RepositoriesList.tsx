import React from "react";
import { useState } from "react";

import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepostiries } = useAction();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTerm(event.target.value);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchRepostiries(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={onChange} />
        <button>Search packages</button>
      </form>
      {error && <h3>Error</h3>}
      {loading && <h3>loading</h3>}
      {!loading &&
        !error &&
        data.map((names) => {
          return <div key={names}>{names}</div>;
        })}
    </div>
  );
};

export default RepositoriesList;
