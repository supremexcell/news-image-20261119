# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/supremexcell/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/supremexcell/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One-image front page summing up the world's news of Thursday 19 November 2026 — 22 stories on one page: 10 main panels plus 12 in brief, with a 13-item world-markets ticker at the bottom, led by what was actually trending, in Indonesia and worldwide. The two biggest stories — the GTA VI launch and the first-ever Trump–Putin–Xi trilateral summit — share the top row at equal size, and every big panel carries its own photo or illustration. A clean newspaper front page with original photo-style illustrations (drawn/generated for this entry, no photos copied from social media), so the image explains itself to a judge with no news feed.

The stories on the page (all verified from the outlets listed in NEWS.md, all events of / first reported on 19 Nov 2026):

1. **GTA VI launch — $1.84bn in a day (top row)** — launched at midnight local on PS5 & Xbox Series X|S ($79.99 / $99.99). By Thursday afternoon Sensor Tower reported $1.84bn and 19m+ copies; 132m hours watched on day one, peak ~8m concurrent, Metacritic 99/100. Panel photo is a generated gameplay-style illustration — original, no Rockstar artwork.
2. **Trump, Putin & Xi: peace pact (top row)** — first-ever trilateral summit, Shenzhen, ~70–81 minutes. Four-point declaration (UN reform, nuclear risk, oil, ICC limits), but no deal on Ukraine or Gaza.
3. **Karhutla — Indonesia's four months of fire** — South Papua worst hit, then West Kalimantan, Sumatra & East Nusa Tenggara. ~200m tons of carbon, 8.9m ha damaged; haze reached Malaysia & Singapore. Prabowo at ASEAN Manila, 15 Nov: "It took nearly four months for us to control."
4. **Anthropic's $81bn debut** — priced $83, opened $111.50, closed $97.17 (+17%, Nasdaq: ANT) — the largest IPO ever, ~$1.5tn valuation.
5. **Gold & Bitcoin tumble** — gold -2% to $3,667/oz, lowest since Sept 2025; Bitcoin $61,635 (-2.15%), near $60,000; ETH $1,746.
6. **US stocks slide** — Dow -1,101 (-2.19%) to 49,097.06; S&P 500 -2.02% to 7,175.83, its 6th straight loss; Nasdaq -2.25% to 23,879.20.
7. **Asian stocks mixed** — Nikkei +0.71% to 59,444.21; Kospi +1.39% to 5,137.89; Hang Seng -1.95% to 22,841.62; TAIEX -4.40% to 38,426.89, its 7th-worst point drop on record, on TSMC chip curbs.
8. **COP31 drops fossil fuels** — Antalya: the revised draft published 19 Nov removes ALL fossil-fuel mentions; Panama threatens to block without an oil-production cap.
9. **Hormuz tankers ablaze** — Iran claims 2 more tankers hit mines in the Strait of Hormuz on 19 Nov, on fire; an ADNOC sailor missing, 11 injured; US–Iran strikes continue. Panel uses a generated illustration made for this entry — original, no copied photo.
10. **Cyclone Akvan nears Odisha** — 80,000+ evacuated in Odisha ahead of landfall on India's east coast.
11. **More in brief (12 items, numbered 1–12)** — Houthi missile on Riyadh and Saudi jets on Sanaa, Ukraine striking the Kerch Bridge a 3rd time in a week, the US–Venezuela military pact, a migrant boat capsizing off Senegal, a 5.7 quake in Kumamoto, Bangladesh starting nuclear power, Mongolia's PM resigning, the IAEA on North Korea's Yongbyon expansion, Voyager 1 reaching one light-day from Earth, a Van Gogh selling for $190.4m, the UK–EU post-Brexit reset deal, and Ethiopia & Eritrea massing forces.
12. **Markets ticker** — S&P 500, Dow, Nasdaq, Nikkei, Kospi, Hang Seng, Shanghai, TAIEX, ASX 200, Gold, WTI (green riser), Bitcoin and VIX, with ▲ / ▼ and red for down (VIX shown red: rising VIX means rising fear). All Thu 19 Nov closes.

`main.ts` (Node 22, standard library only) simply copies the finished `entry.png` to `/output/entry.png`, so the program runs with no network and writes identical bytes on every run. The image is 1024×1024 PNG, 435,896 bytes — inside the 1 MiB / 1024×1024 gate.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bj2pae9c&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
