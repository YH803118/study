function MemberListItem({ item }) {
  return (
    <span>
      아이디 : {item.id} - 이름 : {item.name}
    </span>
  );
}

function MemberList({ items }) {
  return (
    <div className="MemberList">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MemberListItem item={item}></MemberListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MemberList;
