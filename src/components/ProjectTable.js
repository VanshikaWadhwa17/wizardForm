import styles from "../styles/table.module.css";

const projects = [
  { id: "RESI009530", name: "hedmwmd", status: "READY TO ENROLL", nextStep: "Enroll now!" },
  { id: "RESI009529", name: "testenroll", status: "READY TO ENROLL", nextStep: "Enroll now!" },
  { id: "RESI007016", name: "vantest1", status: "REGISTERED", nextStep: "View Dashboard" },
];

export default function ProjectTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Next Steps</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>
                <a href="#" className="text-blue-600">{project.id}</a>
              </td>
              <td>{project.name}</td>
              <td>
                <span className={styles.statusBadge}>{project.status}</span>
              </td>
              <td>
                <a href="#" className="text-blue-600">{project.nextStep}</a>
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
