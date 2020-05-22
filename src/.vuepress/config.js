module.exports = {
  title: "Terra Docs",
  description:
    "Terra is the decentralized financial infrastructure powering the innovation of money. Terra provides the foundational building blocks for a new digital economy with its stablecoin protocol, oracle system, smart contracts, and plan for mass-user adoption.",
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "theme/components",
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
  ],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/7420256/6416592/css/fonts.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://terra.money/static/fonts/jetbrainsMono.css?updated=190220",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/img/docs_logo.svg",
    lastUpdated: "Updated on",
    nav: [
      { text: "Docs", link: "/" },
      { text: "Validators", link: "/validator/" },
      { text: "Core Devs", link: "/core/" },
      {
        text: "GitHub",
        link: "https://github.com/terra-project/core",
        icon: "/img/github.svg",
      },
    ],
    sidebar: {
      "/core/": [
        "/core/",
        {
          title: "Module Specs",
          children: [
            "/core/spec-auth",
            "/core/spec-bank",
            "/core/spec-distribution",
            "/core/spec-governance",
            "/core/spec-market",
            "/core/spec-oracle",
            "/core/spec-slashing",
            "/core/spec-staking",
            "/core/spec-supply",
            "/core/spec-treasury",
          ],
        },
        {
          title: "Other Resources",
          collapsable: false,
          children: [
            [
              "https://pkg.go.dev/github.com/terra-project/core?tab=subdirectories",
              "Go API Reference",
            ],
            ["https://swagger.terra.money", "Terra REST API"],
          ],
        },
      ],
      "/validator/": [
        "/validator/",
        "/validator/getting-started",
        "/validator/oracle",
        "/validator/security",
        "/validator/troubleshooting",
        "/validator/faq",
      ],
      "/": [
        ["/", "Overview"],
        "quickstart",
        {
          title: "Concepts",
          children: [
            "terra",
            "luna",
            "accounts",
            "validators",
            "consensus",
            "stablecoin",
            "seigniorage",
            "governance",
            "smart-contracts",
          ],
        },
        {
          title: "Terra Node",
          children: [
            "node/installation",
            "node/testnet",
            "node/config",
            "node/lcd",
            "node/ledger",
            "node/join-network",
            "node/production",
          ],
        },
        {
          title: "terracli",
          children: [
            "terracli/",
            "terracli/keys",
            "terracli/multisig",
            "terracli/account",
            "terracli/distribution",
            "terracli/governance",
            "terracli/market",
            "terracli/oracle",
            "terracli/slashing",
            "terracli/staking",
            "terracli/treasury",
            "terracli/tx",
          ],
        },
        {
          title: "Ecosystem",
          children: ["core", "mantle", "station", "finder"],
        },
      ],
    },
  },
};
