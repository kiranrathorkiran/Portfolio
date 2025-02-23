
import todoImage from "../assets/todo.png"; 
import mandsaurImage from "../assets/mandsaur.png"; // Import Expense Tracker image

const projects = [
  {
    id: 1,
    name: "MyCity - Mandsaur",
    technologies: "React,API Integration,map",
    image: mandsaurImage,
    github: "https://github.com/vcr11/Expense-Tracker",
    liveDemo: "https://mandsaur-nu.vercel.app",
    desc: "My City - Mandsaur is a React-based website dedicated to providing the latest news, important places, and essential information about Mandsaur. The website keeps users updated with real-time news using an API and offers details about significant landmarks, contact links, and more.",
  },
  {
    id: 2,
    name: "TODO App React",
    technologies: "React,LocalStorage",
    image: todoImage,
    github: "https://github.com/kiranrathorkiran/TODO_APP_REAC",
    liveDemo: "https://todo-app-react-one-lilac.vercel.app/",
    desc:" This is a simple and efficient To-Do app built using React. It allows users to add, edit, delete, and toggle the completion status of tasks. The app utilizes local storage to save tasks, ensuring that they persist even after refreshing the page.  "
  },
 
];

const Projects = () => {
  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white py-20"
      id="projects"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.technologies}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
