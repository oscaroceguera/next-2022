import Btns from "./btns";
import FirstLast from "./first-last";
import OddEven from "./odd-even";
import Form from "./form";
import ParentState from "./parent-state";
import DiffNestedGroups from "./diff-nested-gorups";

export default function HoverFocusStates() {
  return (
    <div className="p-12">
      <Btns />
      <br />
      <FirstLast />
      <OddEven />
      <Form />
      <ParentState />
      <DiffNestedGroups />
    </div>
  );
}
