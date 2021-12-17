import TaskForm from '../../components/taskForm'
import TaskColumn from '../../components/taskColumn'
import RolesColumn from '../../components/rolesColumn';
import RolesForm from '../../components/rolesForm';
import AssignedTasksForm from '../../components/assignedTasksForm';
import AssignedTasksFromColumn from '../../components/assignedTaskFromColumn';
import AssignedTasksToColumn from '../../components/assignedTaskToColumn';

const Dashboard = () => {
    
    return ( 
        <section>
            <div>
                <h1>Hotel task app</h1>
            </div>
            <TaskForm/>
            <TaskColumn/>
            <AssignedTasksForm/>
            <AssignedTasksFromColumn/>
            <AssignedTasksToColumn/>
            {/* <RolesForm/>
            <RolesColumn/> */}
        </section>
     );
}
 
export default Dashboard;