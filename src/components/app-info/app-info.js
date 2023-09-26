import './app-info.css';


function AppInfo ({increased, employees}) {
  return (
    <div className="app-info">
      <h1>
        Accounting for employees in the company N
      </h1>
      <h2>
        Total number of employees: {employees}
      </h2>
      <h2>
        Will receive bonus: {increased}
      </h2>
    </div>
  );
}

export default AppInfo;