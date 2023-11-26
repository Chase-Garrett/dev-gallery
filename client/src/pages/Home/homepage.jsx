import Dashboard from "../../components/Dashboard";
import { ProjectCard } from "../../components/Card";
import SearchBar from "../../components/Search";

export default function Homepage () {
return (
  <>
  <div className="dashboard">
    <Dashboard />
  </div>
  <div className="projectSearch">
    <SearchBar />
  </div>
  <div className="projectCard">
    <ProjectCard />
  </div>
  </>
)
}