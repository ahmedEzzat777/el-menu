import { Outlet } from "react-router-dom";
import CenteredContainer from "../CenteredContainer";

export default function HomePage() {
  return (
    <CenteredContainer>
      <Outlet />
    </CenteredContainer>
  );
}
