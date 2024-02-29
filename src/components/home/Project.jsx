import React from "react";
import { Jumbotron } from "./migration";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hpage from "./images/hpage.png";
import carcar from "./images/carcar.jpg";
import conferencego from "./images/conferencego.png";

const Project = () => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        <Row>
        <Col>
        <div className="container-fluid pb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={hpage} />
          <Card.Body>
            <Card.Title>Munch</Card.Title>
            <Card.Text>
              A social-media style Web application for foodies to post and interact with restaurant reviews.
            </Card.Text>
            <Card.Text>
              - Created in collaboration with a small team of engineers in an agile software development effort
            </Card.Text>
            <Card.Text>
              - Utilized FastAPI for a custom backend, including authorization and authentication
            </Card.Text>
            <Card.Text>
              - Deployed via GitLab CI/CD Pipeline
            </Card.Text>
            <Card.Text>
            Python · JavaScript · React.js · Bootstrap · Git · Object-Oriented Programming · FastAPI · PostgreSQL · CI/CD
            </Card.Text>
            {/* <Button id="button" variant="primary.hover" href="https://munchbunch.gitlab.io/munch/">Live Demo</Button>
            {"  "} */}
            <Button id="button" variant="primary.hover" href="https://gitlab.com/munchbunch/munch">Repo</Button>
          </Card.Body>
        </Card>
        </div>
        </Col>

        <Col>
        <div className="container-fluid pb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={carcar} />
          <Card.Body>
            <Card.Title>CarCar</Card.Title>
            <Card.Text>
            A microservice-based, dynamic front-end Web application for managing aspects of an automobile
            dealership, specifically its inventory, service center, and sales.
            </Card.Text>
            <Card.Text>
            - Configured code to handle significant complexity in data manipulation and visualization
            </Card.Text>
            <Card.Text>
            - Utilized agile software development practices to build microservices that work seamlessly together
            </Card.Text>
            <Card.Text>
            Python · JavaScript · React.js · Bootstrap · Docker · Git · Object-Oriented Programming · Django
            </Card.Text>
            <Button id="button" variant="primary.hover" href="https://gitlab.com/kennedycassiday/project-beta">Repo</Button>
          </Card.Body>
        </Card>
        </div>
        </Col>

        <Col>
        <div className="container-fluid pb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={conferencego} />
          <Card.Body>
            <Card.Title>Conference GO</Card.Title>
            <Card.Text>
              A fullstack Web application for conference attendees
               to access information about upcoming events and register to attend.
            </Card.Text>
            <Card.Text>
              Agile software development practices were utilized to build microservices that work seamlessly together.
            </Card.Text>
            <Card.Text>
            Python · JavaScript · React.js · Bootstrap · Docker · Git · Object-Oriented Programming · Django
            </Card.Text>
            <Button id="button" variant="primary.hover" href="https://gitlab.com/kennedycassiday/fearless-frontend">Repo</Button>
          </Card.Body>
        </Card>
        </div>
        </Col>

        </Row>
      </Container>
    </Jumbotron>
  );
  };

  export default Project;

// import Container from "react-bootstrap/Container";
// import { Jumbotron } from "./migration";
// import Row from "react-bootstrap/Row";
// import ProjectCard from "./ProjectCard";
// import axios from "axios";

// const dummyProject = {
//   name: null,
//   description: null,
//   svn_url: null,
//   stargazers_count: null,
//   languages_url: null,
//   pushed_at: null,
// };
// const API = "https://gitlab.com/api";
// // const gitHubQuery = "/repos?sort=updated&direction=desc";
// // const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

// const Project = ({ heading, username, length, specfic }) => {
//   const allReposAPI = `${API}/v4/users/${username}`;
//   // const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
//   const specficReposAPI = `${API}/repos/${username}`;
//   const dummyProjectsArr = new Array(length + specfic.length).fill(
//     dummyProject
//   );
//   console.log(allReposAPI)

//   const [projectsArray, setProjectsArray] = useState([]);

//   const fetchRepos = useCallback(async () => {
//     let repoList = [];
//     try {
//       // getting all repos
//       const response = await axios.get(allReposAPI);
//       // slicing to the length
//       repoList = [...response.data.slice(0, length)];
//       // adding specified repos
//       console.log(repoList)
//       try {
//         for (let repoName of specfic) {
//           const response = await axios.get(`${specficReposAPI}/${repoName}`);
//           repoList.push(response.data);
//         }
//       } catch (error) {
//         console.error(error.message);
//       }
//       // setting projectArray
//       // TODO: remove the duplication.
//       setProjectsArray(repoList);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }, [allReposAPI, length, specfic, specficReposAPI]);

//   useEffect(() => {
//     fetchRepos();
//   }, [fetchRepos]);

//   return (
//     <Jumbotron fluid id="projects" className="bg-light m-0">
//       <Container className="">
//         <h2 className="display-4 pb-5 text-center">{heading}</h2>
//         <Row>
//           {projectsArray.length
//             ? projectsArray.map((project, index) => (
//               <ProjectCard
//                 key={`project-card-${index}`}
//                 id={`project-card-${index}`}
//                 value={project}
//               />
//             ))
//             : dummyProjectsArr.map((project, index) => (
//               <ProjectCard
//                 key={`dummy-${index}`}
//                 id={`dummy-${index}`}
//                 value={project}
//               />
//             ))}
//         </Row>
//       </Container>
//     </Jumbotron>
//   );
// };

// export default Project;
