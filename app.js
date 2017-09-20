const data = [30, 86, 20, 11, 31, 100, 120];

// Bar Chart
d3.select(".bar.chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .on("click", () => {
      window.open('https://www.google.com');
    })
    .style("width", (d) => {
      return d * 2 + "px";
    })
    .text((d) => {
      return "$" + d;
    })

// Pushcard Chart
d3.select(".pushcard.chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .on("click", () => {
      window.open('https://www.yahoo.com');
    })
    .style("width", (d) => {
      return d * 2 + "px";
    })
    .style("height", (d) => {
      return d * 2 + "px";
    })
    .style("line-height", (d) => {
      return d * 2 + "px";
    })
    .text((d) => {
      return d;
    })