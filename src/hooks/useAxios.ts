import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { CommitData } from "../types/commitDataTypes";

const useAxios = () => {
  const [githubData, setGithubData] = useState<CommitData[]>();

  const fetchCommits = async () => {
    const commitResponse = await axios.get('https://api.github.com/repos/mandomg/actions-test/commits');
    setGithubData(commitResponse.data);
  }

  const commitList = useMemo(() => {
    return !!githubData ? githubData?.map(commitData => {
      return {
        author: commitData.commit.author.name,
        avatarUrl: commitData.author.avatar_url,
        hash: commitData.sha,
        message: commitData.commit.message
      }
    }) : [];
  }, [githubData]);

  useEffect(() => {
    (async () => fetchCommits())()
  }, []);

  return { commitList };
};

export default useAxios;