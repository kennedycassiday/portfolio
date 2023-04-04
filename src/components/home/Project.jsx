import React, { useState, useEffect, useCallback } from "react";
import { Jumbotron } from "./migration";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hpage from "./images/hpage.png";

const Project = () => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        {/* <Row> */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={hpage} />
          <Card.Body>
            <Card.Title>Munch</Card.Title>
            <Card.Text>
              A social-media style Web application for foodies to post and interact with restaurant reviews.
            </Card.Text>
            <Button variant="primary.hover" href="https://munchbunch.gitlab.io/munch/">Live Demo</Button>
            {"  "}
            <Button variant="primary.hover" href="https://gitlab.com/munchbunch/munch">Repo</Button>
          </Card.Body>
        </Card>
        {/* </Row> */}
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
