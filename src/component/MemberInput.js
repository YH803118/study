import { useState } from "react";

const INITIAL_VALUES = {
  name: "",
  team: "",
};

function MemberInput() {
  const [member, setMember] = useState(INITIAL_VALUES);

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (member) {
      formData.append("name", e.name);
      formData.append("name", e.team);
    }
  };
  return (
    <form onSubmit={handleMemberSubmit}>
      <input type="text" name="name"></input>
      <br></br>
      <input type="text" name="team"></input>
      <br></br>
      <button type="submit"> 전송 </button>
    </form>
  );
}

export default MemberInput;
