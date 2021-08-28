import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { CommitData } from "../types/commitDataTypes";

const useAxios = () => {
  const [githubData, setGithubData] = useState<CommitData[]>();

  const fetchCommits = async () => {
    try {
      const commitResponse = await axios.get('https://api.github.com/repos/mandomg/github-api-test/commits');
      setGithubData(commitResponse.data);
    } catch {
      const okButton = { text: 'Ok' };
      Alert.alert('Error', 'Could not reach the repo', [okButton]);
    }
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