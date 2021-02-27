// rafce + tab
import React from 'react';
import PropTypes from 'prop-types';   // impt + tab
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repos
