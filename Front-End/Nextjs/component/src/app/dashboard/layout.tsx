// parrale routing pass as props to layout which in the folder contains them
export default function DashBoardLayout({
  children,
  user,
  navigation,
}: {
  user: React.ReactNode;
  children: React.ReactNode;
  navigation: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{children}</div>
      <div>{user}</div>
      <div>{navigation}</div>
    </div>
  );
}
