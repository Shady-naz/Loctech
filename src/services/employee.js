import router from "../common";

class EmployeeDataService {
    addEmployee(data) {
        return router.post("/api/employee", data)
    }
}

export default new EmployeeDataService()