const data = [
  {url: "http://avatar.net/7687612" },
  {url: "/2222222"},
  {url: "http://avatar.net/3333333"},
  {url: null},
  {url: "/7687612"}
];
const newData = data.map(el => {
  if (!el.url) return el;
  if (el.url.includes("http")) return el;
  el.url = `http://avatar.net${el.url}`;
  return el;
});
console.log(newData);