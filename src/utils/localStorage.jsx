localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "abc@abc.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNo: 1,
        title: "Submit Daily Report",
        description: "Submit the daily work report before 6 PM",
        date: "2026-01-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNo: 2,
        title: "Team Meeting",
        description: "Attend weekly team sync meeting",
        date: "2026-01-09",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNo: 3,
        title: "Fix Login Bug",
        description: "Resolve login issue in dashboard",
        date: "2026-01-08",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "employee2@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNo: 1,
        title: "UI Design Review",
        description: "Review dashboard UI components",
        date: "2026-01-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNo: 2,
        title: "Update Documentation",
        description: "Update API documentation",
        date: "2026-01-07",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskNo: 3,
        title: "Client Feedback",
        description: "Analyze client feedback and prepare summary",
        date: "2026-01-06",
        category: "Analysis"
      }
    ]
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNo: 1,
        title: "Database Backup",
        description: "Take weekly database backup",
        date: "2026-01-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNo: 2,
        title: "Optimize Queries",
        description: "Improve slow SQL queries",
        date: "2026-01-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskNo: 3,
        title: "Server Monitoring",
        description: "Monitor server performance",
        date: "2026-01-08",
        category: "Infrastructure"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNo: 4,
        title: "Fix Deployment Issue",
        description: "Resolve production deployment error",
        date: "2026-01-07",
        category: "DevOps"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNo: 1,
        title: "Prepare Presentation",
        description: "Prepare slides for client demo",
        date: "2026-01-13",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNo: 2,
        title: "Client Demo",
        description: "Give product demo to client",
        date: "2026-01-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskNo: 3,
        title: "Bug Verification",
        description: "Verify fixed bugs",
        date: "2026-01-09",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    firstName: "Priya",
    email: "employee5@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNo: 1,
        title: "Write Test Cases",
        description: "Write unit test cases",
        date: "2026-01-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNo: 2,
        title: "Regression Testing",
        description: "Perform regression testing",
        date: "2026-01-10",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskNo: 3,
        title: "Bug Report",
        description: "Report critical bugs",
        date: "2026-01-08",
        category: "Testing"
      }
    ]
  }
];



const admin = [
  {
    id: 101,
    email: "admin@company.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}