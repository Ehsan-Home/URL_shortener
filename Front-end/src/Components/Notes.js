import { Alert } from "antd";

const Notes = () => {
  return (
    <Alert
      message="Notes"
      description={
        <ul>
          <li>
            My name is Ehsan Ghasaei and this is the assessment for full-stack
            software developer role @ Pani Energy
          </li>
        </ul>
      }
      type="info"
    />
  );
};

export default Notes;
