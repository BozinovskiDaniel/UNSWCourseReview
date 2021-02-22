import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

function Faculties() {
  let history = useHistory();
  const [faculties, setFaculties] = useState(null);

  useEffect(() => {
    setFaculties(["Computer Science", "Medicine", "Business School", "Law"]);
  }, []);

  return (
    faculties && (
      <div className="Faculties">
        {faculties.map((f) => {
          return (
            <button className="faculty" onClick={() => history.push("/cse")}>
              {f}
            </button>
          );
        })}
      </div>
    )
  );
}

export default Faculties;
