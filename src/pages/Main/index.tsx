import React, { useState, FormEvent, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import useStorage from '../../hooks/useStorage';
import { Repositories } from '../../interfaces/InterfaceRepositories';

import {
  Title,
  Container,
  Logo,
  Form,
  Input,
  Submit,
  Repository,
  Link,
  Box,
  RepoName,
  Description,
  Error,
} from './styles';

const Main: React.FC = () => {
  const [repositories, setRepositories] = useState(useStorage('@repositories'));
  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('@repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleRepositories(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setError('Digite um repositorio valido');
      return;
    }

    try {
      const response = await api.get<Repositories>(`/repos/${newRepo}`);
      setRepositories([...repositories, response.data]);
      setNewRepo('');
      setError('');
    } catch (err) {
      setError('Repositorio não encontrado');
      setNewRepo('');
    }
  }

  return (
    <Container>
      <Logo>
        <FaGithub size={30} color="#666" />
        <span>Github_explorer</span>
      </Logo>
      <Title>Explore repositórios no github</Title>
      <Form hasError={!!error} onSubmit={handleRepositories}>
        <Input
          placeholder="Nome do repositório..."
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
        />
        <Submit type="submit">Enviar</Submit>
      </Form>

      {error && <Error>{error}</Error>}

      <Repository>
        {repositories.map(item => (
          <Link
            key={item.full_name}
            href={`https://github.com/${item.owner.login}`}
          >
            <img src={item.owner.avatar_url} alt={item.owner.login} />
            <Box>
              <RepoName>{item.full_name}</RepoName>
              <Description>{item.description}</Description>
            </Box>
            <FiChevronRight size={25} color="#333" />
          </Link>
        ))}
      </Repository>
    </Container>
  );
};

export default Main;
