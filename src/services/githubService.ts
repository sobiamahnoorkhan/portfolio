export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count?: number;
  homepage?: string | null;
}

export interface GitHubAccountState {
  username: string | null;
  repos: GitHubRepo[];
  isLoading: boolean;
  error: string | null;
  lastFetched: Date | null;
}

const STORAGE_KEY = 'sobiamahnoor_github_username';
export const DEFAULT_GITHUB_USERNAME = 'sobiamahnoorkhan';
export const GITHUB_PROFILE_URL = 'https://github.com/sobiamahnoorkhan';

export function getStoredGitHubUsername(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && stored.trim() ? stored.trim() : DEFAULT_GITHUB_USERNAME;
  } catch {
    return DEFAULT_GITHUB_USERNAME;
  }
}

export function saveGitHubUsername(username: string | null): void {
  try {
    if (username && username.trim()) {
      localStorage.setItem(STORAGE_KEY, username.trim());
    } else {
      localStorage.setItem(STORAGE_KEY, DEFAULT_GITHUB_USERNAME);
    }
  } catch {
    // Ignore storage errors
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const cleanUsername = username.trim();
  if (!cleanUsername) {
    return [];
  }

  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(cleanUsername)}/repos?sort=updated&per_page=12`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`GitHub user "${cleanUsername}" was not found.`);
    }
    if (response.status === 403) {
      throw new Error('GitHub API rate limit reached. Please try again later.');
    }
    throw new Error(`Failed to load GitHub repositories (${response.statusText}).`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || null,
    html_url: repo.html_url,
    language: repo.language || null,
    topics: Array.isArray(repo.topics) ? repo.topics : [],
    updated_at: repo.updated_at,
    stargazers_count: repo.stargazers_count || 0,
    forks_count: repo.forks_count || 0,
    open_issues_count: repo.open_issues_count || 0,
    homepage: repo.homepage || null,
  }));
}
