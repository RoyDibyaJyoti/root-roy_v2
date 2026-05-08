export interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const GITHUB_USERNAME = "RoyDibyaJyoti";
const BASE_URL = "https://api.github.com";

export async function fetchGitHubProfile(): Promise<GitHubProfile> {
  const response = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`);
  if (!response.ok) throw new Error("Failed to fetch GitHub profile");
  return response.json();
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
  if (!response.ok) throw new Error("Failed to fetch GitHub repositories");
  return response.json();
}

export async function fetchGitHubEvents() {
  const response = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}/events/public`);
  if (!response.ok) return [];
  return response.json();
}

export async function fetchGitHubStats() {
  const [profile, repos, events] = await Promise.all([
    fetchGitHubProfile(),
    fetchGitHubRepos(),
    fetchGitHubEvents()
  ]);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  
  // Map events to date activity
  const eventCounts: Record<string, number> = {};
  events.forEach((event: any) => {
    const date = event.created_at.split("T")[0];
    eventCounts[date] = (eventCounts[date] || 0) + 1;
  });

  const languages = repos.reduce((acc: Record<string, number>, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const languageData = Object.entries(languages)
    .map(([name, count]) => ({
      name,
      value: Math.round((count / repos.length) * 100),
      color: getLanguageColor(name)
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return {
    profile,
    repos,
    totalStars,
    languageData,
    totalRepos: profile.public_repos,
    followers: profile.followers,
    eventCounts
  };
}

function getLanguageColor(lang: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    C: "#555555",
    "C++": "#f34b7d",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Go: "#00ADD8",
    Rust: "#dea584",
  };
  return colors[lang] || "#cccccc";
}
