import React, { useState, useEffect } from 'react';
import { REAL_PROJECTS, PERSONAL_INFO, ProjectItem } from '../data/portfolioData';
import { InteractiveProjectCard } from './InteractiveProjectCard';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import {
  fetchGitHubRepos,
  getStoredGitHubUsername,
  saveGitHubUsername,
  GitHubRepo,
  DEFAULT_GITHUB_USERNAME,
  GITHUB_PROFILE_URL,
} from '../services/githubService';
import {
  Sparkles,
  Eye,
  CheckCircle2,
  FileCode,
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  AlertCircle,
  RefreshCw,
  PlusCircle,
  FolderGit2,
  Shield,
  Layers,
  Search,
  Check,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [githubUsername, setGithubUsername] = useState<string>(getStoredGitHubUsername() || DEFAULT_GITHUB_USERNAME);
  const [inputUsername, setInputUsername] = useState<string>(DEFAULT_GITHUB_USERNAME);
  const [isConfiguringGitHub, setIsConfiguringGitHub] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState<boolean>(false);
  const [githubError, setGithubError] = useState<string | null>(null);

  const loadRepos = async (username: string) => {
    if (!username.trim()) {
      setRepos([]);
      return;
    }
    setIsLoadingRepos(true);
    setGithubError(null);
    try {
      const data = await fetchGitHubRepos(username);
      setRepos(data);
    } catch (err: any) {
      setGithubError(err.message || 'Failed to fetch repositories.');
      setRepos([]);
    } finally {
      setIsLoadingRepos(false);
    }
  };

  useEffect(() => {
    if (githubUsername) {
      loadRepos(githubUsername);
    }
  }, [githubUsername]);

  const handleSaveUsername = (e: React.FormEvent) => {
    e.preventDefault();
    const target = inputUsername.trim() || DEFAULT_GITHUB_USERNAME;
    saveGitHubUsername(target);
    setGithubUsername(target);
    setIsConfiguringGitHub(false);
    loadRepos(target);
  };

  const handleResetToDefault = () => {
    saveGitHubUsername(DEFAULT_GITHUB_USERNAME);
    setGithubUsername(DEFAULT_GITHUB_USERNAME);
    setInputUsername(DEFAULT_GITHUB_USERNAME);
    loadRepos(DEFAULT_GITHUB_USERNAME);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Stage 06 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Documented Projects & Concepts</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              AI Projects & Experiments
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Real conceptual frameworks and development architectures designed at the intersection of legal assistance and accessibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Real Projects Grid with Interactive 3D Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {REAL_PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 150}>
              <InteractiveProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub Integration Subsection (Live Real Data Only) */}
        <div id="github-integration" className="max-w-5xl mx-auto pt-8">
          <ScrollReveal delay={200}>
            <div className="p-6 sm:p-8 glass-card rounded-3xl relative shadow-xl hover:border-[var(--accent-primary)]">
              
              {/* Header with Connection Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-200 theme-accent-text">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                      <span>GitHub Integration</span>
                      <span className="text-xs font-mono theme-accent-text font-normal">
                        [Connected: @{githubUsername}]
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Real-time GitHub profile and repository synchronization.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono font-medium transition-all"
                    title="Open GitHub profile in new tab"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/{githubUsername}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  <button
                    onClick={() => loadRepos(githubUsername)}
                    disabled={isLoadingRepos}
                    className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white cursor-pointer"
                    title="Refresh repositories"
                  >
                    <RefreshCw className={`w-4 h-4 ${isLoadingRepos ? 'animate-spin theme-accent-text' : ''}`} />
                  </button>

                  <button
                    onClick={() => setIsConfiguringGitHub(!isConfiguringGitHub)}
                    className="text-xs px-3 py-1.5 rounded-xl glass-pill text-slate-300 hover:text-white cursor-pointer"
                    title="Configure GitHub handle"
                  >
                    Change Handle
                  </button>
                </div>
              </div>

              {/* GitHub Username Inline Config Form */}
              {isConfiguringGitHub && (
                <form
                  onSubmit={handleSaveUsername}
                  className="p-5 mb-6 rounded-2xl glass-panel border border-[var(--accent-primary)] space-y-4 animate-fadeIn"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Github className="w-4 h-4 theme-accent-text" />
                      <span>Change GitHub Account</span>
                    </h4>
                    <button
                      type="button"
                      onClick={() => setIsConfiguringGitHub(false)}
                      className="text-xs text-slate-400 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="text-xs text-slate-400">
                    Enter any public GitHub username to inspect live repositories.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={inputUsername}
                      onChange={(e) => setInputUsername(e.target.value)}
                      placeholder="e.g. sobiamahnoorkhan"
                      className="flex-1 px-3.5 py-2 rounded-xl bg-black/40 border border-white/20 text-sm text-white focus:outline-none focus:border-[var(--accent-primary)] font-mono"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl theme-btn-primary text-white text-xs font-semibold cursor-pointer"
                      >
                        Connect & Fetch
                      </button>
                      <button
                        type="button"
                        onClick={handleResetToDefault}
                        className="px-3 py-2 rounded-xl glass-pill text-slate-300 text-xs cursor-pointer"
                      >
                        Reset to @sobiamahnoorkhan
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* Error Message */}
              {githubError && (
                <div className="p-4 mb-6 rounded-2xl bg-red-950/40 border border-red-800/40 text-red-300 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{githubError}</span>
                  </div>
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline theme-accent-text hover:opacity-80"
                  >
                    Visit Direct Profile
                  </a>
                </div>
              )}

              {/* Loading State */}
              {isLoadingRepos && (
                <div className="py-12 text-center space-y-3">
                  <RefreshCw className="w-6 h-6 theme-accent-text animate-spin mx-auto" />
                  <p className="text-xs font-mono text-slate-400">
                    Retrieving repositories for @{githubUsername} from GitHub API...
                  </p>
                </div>
              )}

              {/* Connected State: Live Repositories */}
              {!isLoadingRepos && repos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {repos.map((repo) => (
                    <div
                      key={repo.id}
                      className="p-4 rounded-2xl glass-card transition-all flex flex-col justify-between group hover:border-[var(--accent-primary)]"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm font-semibold theme-accent-text hover:opacity-80 flex items-center gap-1.5"
                          >
                            <FolderGit2 className="w-4 h-4" />
                            <span className="truncate">{repo.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                          </a>
                          {repo.language && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full glass-pill text-slate-300">
                              {repo.language}
                            </span>
                          )}
                        </div>

                        {repo.description && (
                          <p className="text-xs text-slate-400 line-clamp-2">
                            {repo.description}
                          </p>
                        )}

                        {repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-1">
                            {repo.topics.slice(0, 3).map((topic, tidx) => (
                              <span
                                key={tidx}
                                className="text-[9px] font-mono px-2 py-0.5 rounded-full glass-pill theme-accent-text"
                              >
                                #{topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(repo.updated_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Profile Connected State Banner */}
              {!isLoadingRepos && repos.length === 0 && (
                <div className="py-10 px-6 text-center rounded-2xl glass-panel space-y-4">
                  <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center theme-accent-text mx-auto shadow-[0_0_12px_var(--theme-glow)]">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      Connected GitHub Profile: @{githubUsername}
                    </h4>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Official GitHub account linked. View contributions, repositories, and technical repositories directly on GitHub.
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`https://github.com/${githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl theme-btn-primary text-white text-xs font-semibold transition-all shadow-xl cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Open https://github.com/{githubUsername}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

