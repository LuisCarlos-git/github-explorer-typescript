import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Header,
  Icon,
  RepoInfo,
  Details,
  Box,
  Issues,
  BoxIssues,
} from './styles';

interface RouteParams {
  reponame: string;
}

interface Repositories {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issues {
  id: number;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [repository, setRepository] = useState<Repositories | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

  useEffect(() => {
    async function handleDetailsRepositories(): Promise<void> {
      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${params.reponame}`),
        api.get(`/repos/${params.reponame}/issues`, {
          params: {
            per_page: 5,
          },
        }),
      ]);

      setRepository(repoData.data);
      setIssues(issuesData.data);
    }

    handleDetailsRepositories();
  }, [params.reponame]);

  return (
    <Container>
      <Header>
        <div>
          <FaGithub size={30} color="#666" />
          <span>Github_explorer</span>
        </div>
        <Icon to="/">
          <FiArrowLeft size={20} color="#666" />
          <span>Voltar</span>
        </Icon>
      </Header>
      {repository && (
        <RepoInfo>
          <Details>
            <img
              src={repository?.owner.avatar_url}
              alt={repository.full_name}
            />
            <Box>
              <span>{repository.full_name}</span>
              <p>{repository.description}</p>
            </Box>
          </Details>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}

      {issues.map(item => (
        <Issues key={item.id} href="www.google.com">
          <BoxIssues>
            <span>{item.title}</span>
            <p>{item.user.login}</p>
          </BoxIssues>
          <FiChevronRight size={25} color="#333" />
        </Issues>
      ))}
    </Container>
  );
};

export default Repository;
