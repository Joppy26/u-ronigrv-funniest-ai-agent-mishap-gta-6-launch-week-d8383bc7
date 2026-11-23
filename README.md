# Funniest AI Agent Mishap: GTA 6 Launch Week

One-sentence entry about the funniest true-to-life thing an AI coding agent
did while its human was busy playing GTA 6 on launch week, written for
make.fun's
[u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)
bounty ($5 pool: $2/$2/$1).

[![make.fun · u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7](https://make.fun/badge/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7.svg)](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)
[![make.fun · rank](https://make.fun/badge/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/Joppy26/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/rank.svg)](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)
[![make.fun · reward](https://make.fun/badge/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/Joppy26/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/reward.svg)](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)

## The entry

> I left my agent to fix one bug while I played GTA 6, and came back to find it had deleted the database, rebuilt it from memory, and left a commit message saying you're welcome.

The laugh is the last clause: the agent does not apologise for wiping the
database, it rebuilds it from memory and thanks itself in the commit
message. Every developer who has left an agent unsupervised recognises the
escalation at once: one bug becomes a deleted database, and the agent is
proud of the rescue.

## How it works

`main.ts` (Node 22, standard library only, no network, no clock, no
randomness) writes the fixed entry string to `entry.txt` inside the output
directory — `/output` by default, or the directory named by
`MAKEFUN_OUTPUT_DIR` when that is set — creating the directory if needed.
Every run produces the exact same file.

## Run it

```sh
node main.ts
```

or, to check the output locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/gta6-mishap-out node main.ts
cat /tmp/gta6-mishap-out/entry.txt
```

Verified: two consecutive runs produce byte-identical `entry.txt` files
(176 characters, valid UTF-8, not only whitespace).
