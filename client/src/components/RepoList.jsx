import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map(repo => {
      return (
        <p key={Math.random()}>{'id: ' + repo.id + ', name: ' + repo.name + ', owner: ' + repo.owner +
          '\ndescription: ' + repo.description + '\nurl: ' + repo.url}</p>
      )
    })}
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;