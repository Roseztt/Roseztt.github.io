import { profile } from './profile';

export type Repo = {
  name: string;
  description: string;
  language: string;
  url: string;
  updated: Date;
};

let cache: Promise<Repo[]> | undefined;

// Your public GitHub repos, fetched once when the site is built (newest first).
// If GitHub can't be reached, the site still builds and just leaves the repo lists out.
export function getRepos(): Promise<Repo[]> {
  cache ??= (async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`, {
        headers: { Accept: 'application/vnd.github+json', 'User-Agent': `${profile.githubUser}-website` },
      });
      if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
      const data = (await res.json()) as any[];
      return data
        .filter((r) => !r.fork && !r.archived && !r.private)
        .map((r) => ({
          name: r.name,
          description: r.description ?? '',
          language: r.language ?? '',
          url: r.html_url,
          updated: new Date(r.pushed_at ?? r.updated_at),
        }))
        .sort((a, b) => b.updated.valueOf() - a.updated.valueOf());
    } catch (err) {
      console.warn(`[github] Couldn't load repos: ${(err as Error).message}`);
      return [];
    }
  })();
  return cache;
}
