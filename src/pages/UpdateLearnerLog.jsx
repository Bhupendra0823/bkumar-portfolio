import { useEffect } from "react";

const UpdateLearnerLog = () => {
  useEffect(() => {
    window.location.href = "https://learninglogmanager.onrender.com/docs";
  }, []);

  return <p>Redirecting to Learner Log Manager...</p>;
};

export default UpdateLearnerLog;
