const map = {
  "//localhost:7100/": "//10.236.2.180:92/react17/",
  "//localhost:7200/": "//10.236.2.180:92/vue2/",
  "//localhost:7300/": "//10.236.2.180:92/vue3/",
  // "//localhost:7400/": "//10.236.2.180:92/angular12/",
  // "//localhost:7500/": "//wujie-micro.github.io/demo-vite/",
  // "//localhost:7600/": "//wujie-micro.github.io/demo-react16/",
  // "//localhost:7700/": "//wujie-micro.github.io/demo-main-react/",
  // "//localhost:8000/": "//10.236.2.180:92/main/",
};

export default function hostMap(host) {
  if (process.env.NODE_ENV === "production") return map[host];
  console.log(host);
  return host;
}
